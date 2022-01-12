import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  @Input() devices : any;
  @Input() indice : any;

  constructor(private deviceService:DeviceService) { }

  ngOnInit(): void {
  }

  onTurnOn() {

    this.deviceService.TurnOn(this.indice);

  }

  onTurnOff() {
    this.deviceService.TurnOff(this.indice);
  }

}
