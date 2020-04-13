import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingInformationPage } from './parking-information.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingInformationPageRoutingModule {}
