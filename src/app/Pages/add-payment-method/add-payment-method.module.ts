import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPaymentMethodPageRoutingModule } from './add-payment-method-routing.module';

import { AddPaymentMethodPage } from './add-payment-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPaymentMethodPageRoutingModule
  ],
  declarations: [AddPaymentMethodPage]
})
export class AddPaymentMethodPageModule {}
