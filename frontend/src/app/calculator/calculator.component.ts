import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  result: number = 0;

  constructor(private http: HttpClient) { }

  calculate(number1: number, number2: number) {
    // Define a mapping object
    // Define a mapping object for numbers 1-9
    const numberMapping: { [key: number]: string } = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine"
    };

    // Calculate the result dynamically
    this.result = Math.abs(number1 - number2);
    console.log("before sending to arduino", this.result);
    console.log(typeof this.result);

    // Convert numeric result to mapped string value
    const mappedResult = numberMapping[this.result] || "Invalid"; // Default fallback

    // Send to backend only if a valid mapping exists
    if (mappedResult !== "Invalid") {
      this.http.post('http://localhost:3000/send-to-arduino', { result: mappedResult  }).subscribe(
        (response) => {
          console.log('Data sent to Node.js:', response);
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
    }else {
      console.error("Invalid result value:", this.result);
    }
  }
}

