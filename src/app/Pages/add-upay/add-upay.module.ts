import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUpayPageRoutingModule } from './add-upay-routing.module';

import { AddUpayPage } from './add-upay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUpayPageRoutingModule
  ],
  declarations: [AddUpayPage]
})
export class AddUpayPageModule {}
