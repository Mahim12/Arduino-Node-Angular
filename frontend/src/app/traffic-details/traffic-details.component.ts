import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traffic-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './traffic-details.component.html',
  styleUrl: './traffic-details.component.scss'
})
export class TrafficDetailsComponent {
  @Input()
  light: String = "";

  displayMessage(): String {
    switch (this.light) {
      case "red":
        return "Stop red light is on!";
      case "yellow":
        return "Hold on tight";
      case "green":
        return "Go";
      default:
        return "Please Select a light";
    }
  }

  getLightClass() {
    return {
      'red-light': this.light === 'red',
      'yellow-light': this.light === 'yellow',
      'green-light': this.light === 'green'
    };
  }

}
