import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMasterCardPage } from './add-master-card.page';

const routes: Routes = [
  {
    path: '',
    component: AddMasterCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMasterCardPageRoutingModule {}
