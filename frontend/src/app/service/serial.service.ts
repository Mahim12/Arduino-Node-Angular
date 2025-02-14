import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerialService {
  private port: any = null; // ✅ Change SerialPort to any
  private writer: WritableStreamDefaultWriter | null = null;

  async connect() {
    try {
      this.port = await (navigator as any).serial.requestPort(); // ✅ Fix "serial does not exist"
      await this.port.open({ baudRate: 9600 }); // Match Arduino baud rate
      this.writer = this.port.writable!.getWriter();
      console.log("Connected to Arduino!");
    } catch (error) {
      console.error("Serial connection failed:", error);
    }
  }

  async sendMessage(message: string) {
    if (!this.writer) {
      console.error("Not connected to Arduino!");
      return;
    }
    const encoder = new TextEncoder();
    await this.writer.write(encoder.encode(message + "\n"));
  }
}
