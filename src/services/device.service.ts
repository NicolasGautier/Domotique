import { Device } from "src/app/models/device";

export class DeviceService{

  devices:Device[]= [
    {name:'playstation',status:'éteint'},
    {name:'TV',status:'allumé'},
    {name:'Xbox',status:'éteint'}
  ];

  add(name:string){
    let a = new Device(name,'éteint');
    this.devices.push(a);
  }

  TurnOnAll(){
    for(let a of this.devices)
    {
      a.status = 'allumé';
    }
  }

  TurnOffAll(){
    for(let a of this.devices)
    {
      a.status = 'éteint';
    }
  }

  TurnOn(i:number){

    this.devices[i].status = 'allumé';

  }

  TurnOff(i:number){

    this.devices[i].status = 'éteint';

  }
}
