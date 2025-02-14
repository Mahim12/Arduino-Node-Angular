import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // ✅ Ensures this service is globally available
})
export class TrafficService {
  private apiUrl = 'http://localhost:3000/send-message'; // Update if needed

  constructor(private http: HttpClient) {} // ✅ Ensure HttpClient is injected

  sendMessage(message: string) {
    return this.http.post(this.apiUrl, { message });
  }
}
