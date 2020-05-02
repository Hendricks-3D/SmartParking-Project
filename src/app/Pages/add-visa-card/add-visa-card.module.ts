import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVisaCardPageRoutingModule } from './add-visa-card-routing.module';

import { AddVisaCardPage } from './add-visa-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVisaCardPageRoutingModule
  ],
  declarations: [AddVisaCardPage]
})
export class AddVisaCardPageModule {}
