import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMasterCardPageRoutingModule } from './add-master-card-routing.module';

import { AddMasterCardPage } from './add-master-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMasterCardPageRoutingModule
  ],
  declarations: [AddMasterCardPage]
})
export class AddMasterCardPageModule {}
