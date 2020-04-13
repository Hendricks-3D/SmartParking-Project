import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingInformationPageRoutingModule } from './parking-information-routing.module';

import { ParkingInformationPage } from './parking-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingInformationPageRoutingModule
  ],
  declarations: [ParkingInformationPage]
})
export class ParkingInformationPageModule {}
