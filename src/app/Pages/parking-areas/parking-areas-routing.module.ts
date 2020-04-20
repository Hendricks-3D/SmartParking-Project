import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingAreasPage } from './parking-areas.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingAreasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingAreasPageRoutingModule {}
