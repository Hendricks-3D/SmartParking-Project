import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: '../smart-parking-home/smart-parking-home.module#SmartParkingHomePageModule'
      },
      {
        path: 'core-team',
        loadChildren: '../core-team/core-team.module#CoreTeamPageModule'
      },
      {
        path: 'payments',
        loadChildren: '../payments/payments.module#PaymentsPageModule'
      },
      {
        path: 'contact-us',
        loadChildren: '../contact-us/contact-us.module#ContactUsPageModule'
      },
      {
        path: 'parking',
        loadChildren: '../parking-information/parking-information.module#ParkingInformationPageModule'
      },
      {
        path: 'privacy',
        
        loadChildren: '../privacy-policy/privacy-policy.module#PrivacyPolicyPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/main'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})

export class MenuPageModule { }