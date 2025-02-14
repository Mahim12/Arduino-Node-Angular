import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LightComponent } from './light/light.component';
import { TrafficDetailsComponent } from './traffic-details/traffic-details.component';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LightComponent, TrafficDetailsComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'all-interests-combined';
}
