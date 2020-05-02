import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPaypalPage } from './add-paypal.page';

const routes: Routes = [
  {
    path: '',
    component: AddPaypalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPaypalPageRoutingModule {}
