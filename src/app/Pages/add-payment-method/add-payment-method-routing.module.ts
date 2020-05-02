import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPaymentMethodPage } from './add-payment-method.page';

const routes: Routes = [
  {
    path: '',
    component: AddPaymentMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPaymentMethodPageRoutingModule {}
