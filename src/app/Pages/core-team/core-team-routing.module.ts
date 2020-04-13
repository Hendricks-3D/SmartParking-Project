import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoreTeamPage } from './core-team.page';

const routes: Routes = [
  {
    path: '',
    component: CoreTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreTeamPageRoutingModule {}
