import { Component } from '@angular/core';
import {Device} from "./models/device";
import {DeviceService} from "../services/device.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  devices : Device[] = [];
  name: string = '';


  constructor(private deviceService:DeviceService) {
  }

  ngOnInit():void {
    //récupération du tableau du service
    this.devices = this.deviceService.devices;
  }

  onAdd() {
    this.deviceService.add(this.name);
    this.name ='';
  }

  onTurnOnAll() {

    this.deviceService.TurnOnAll();
  }

  onTurnOffAll() {

    this.deviceService.TurnOffAll();
  }

}
