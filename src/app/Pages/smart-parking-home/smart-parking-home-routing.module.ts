import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartParkingHomePage } from './smart-parking-home.page';

const routes: Routes = [
  {
    path: '',
    component: SmartParkingHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartParkingHomePageRoutingModule {}
