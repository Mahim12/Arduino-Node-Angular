import { Component, Input } from '@angular/core';
import { TrafficDetailsComponent } from '../traffic-details/traffic-details.component';
import { TrafficService } from '../service/traffic.service';



@Component({
  selector: 'app-light',
  standalone: true,
  imports: [TrafficDetailsComponent],
  templateUrl: './light.component.html',
  styleUrl: './light.component.scss'
})
export class LightComponent {
  selectedLight: string = "Nothing";

  constructor(private trafficService: TrafficService) {}

  sendSelection(value:string){
    this.selectedLight = value;
  }

  sendTraffic(value:string) {
    this.selectedLight = value;
    this.trafficService.sendMessage(this.selectedLight)
      .subscribe(response => {
        console.log("Response from Node.js:", response);
      });
  }
}
