import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmartParkingHomePageRoutingModule } from './smart-parking-home-routing.module';

import { SmartParkingHomePage } from './smart-parking-home.page';
import { CustomFilterPipe } from '../../custom-filter.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmartParkingHomePageRoutingModule
  ],
  declarations: [SmartParkingHomePage,CustomFilterPipe ],
})
export class SmartParkingHomePageModule {}
