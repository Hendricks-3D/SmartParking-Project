import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVisaCardPage } from './add-visa-card.page';

const routes: Routes = [
  {
    path: '',
    component: AddVisaCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVisaCardPageRoutingModule {}
