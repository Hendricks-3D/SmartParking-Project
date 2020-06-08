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
      ,
      {
        path: 'parking-areas',
        
        loadChildren: '../parking-areas/parking-areas.module#ParkingAreasPageModule'
      },
      {
        path: 'book-parking',
        
        loadChildren: '../book-parking/book-parking.module#BookParkingPageModule'
      },
      {
        path: 'add-payment-method',
        
        loadChildren: '../add-payment-method/add-payment-method.module#AddPaymentMethodPageModule'
      },
      {
        path: 'add-master',
        
        loadChildren: '../add-master-card/add-master-card.module#AddMasterCardPageModule'
      },
      {
        path: 'add-visa',
        
        loadChildren: '../add-visa-card/add-visa-card.module#AddVisaCardPageModule'
      },
      {
        path: 'add-paypal',
        
        loadChildren: '../add-paypal/add-paypal.module#AddPaypalPageModule'
      },
      {
        path: 'add-upay',
        
        loadChildren: '../add-upay/add-upay.module#AddUpayPageModule'
      },
      {
        path: 'login',
        
        loadChildren: '../login/login.module#LoginPageModule'
      },
      {
        path: 'registration',
        
        loadChildren: '../registration/registration.module#RegistrationPageModule'
      },

      {
        path: 'forget-password',
        
        loadChildren: '../forget-password/forget-password.module#ForgetPasswordPageModule'
      },
      
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