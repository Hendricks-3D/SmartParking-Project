import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartParkingHomePageRoutingModule } from './smart-parking-home-routing.module';

import { SmartParkingHomePage } from './smart-parking-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartParkingHomePageRoutingModule
  ],
  declarations: [SmartParkingHomePage]
})
export class SmartParkingHomePageModule {}
