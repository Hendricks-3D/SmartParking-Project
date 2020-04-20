import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParkingAreasPageRoutingModule } from './parking-areas-routing.module';

import { ParkingAreasPage } from './parking-areas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParkingAreasPageRoutingModule
  ],
  declarations: [ParkingAreasPage]
})
export class ParkingAreasPageModule {}
