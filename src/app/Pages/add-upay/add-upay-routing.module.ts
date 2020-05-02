import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUpayPage } from './add-upay.page';

const routes: Routes = [
  {
    path: '',
    component: AddUpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUpayPageRoutingModule {}
