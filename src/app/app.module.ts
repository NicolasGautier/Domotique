import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import {FormsModule} from "@angular/forms";
import {DeviceService} from 'src/services/device.service';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],

  providers: [
    DeviceService // Déclarer le service
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
