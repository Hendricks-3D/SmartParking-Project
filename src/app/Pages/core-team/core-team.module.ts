import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoreTeamPageRoutingModule } from './core-team-routing.module';

import { CoreTeamPage } from './core-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreTeamPageRoutingModule
  ],
  declarations: [CoreTeamPage]
})
export class CoreTeamPageModule {}
