import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './Pages/menu/menu.module#MenuPageModule'
  },
  {
    path: 'smart-parking-home',
    loadChildren: () => import('./Pages/smart-parking-home/smart-parking-home.module').then( m => m.SmartParkingHomePageModule)
  },
  {
    path: 'parking-areas',
    loadChildren: () => import('./Pages/parking-areas/parking-areas.module').then( m => m.ParkingAreasPageModule)
  },
  {
    path: 'book-parking',
    loadChildren: () => import('./Pages/book-parking/book-parking.module').then( m => m.BookParkingPageModule)
  },
  {
    path: 'add-payment-method',
    loadChildren: () => import('./Pages/add-payment-method/add-payment-method.module').then( m => m.AddPaymentMethodPageModule)
  },
  {
    path: 'add-paypal',
    loadChildren: () => import('./Pages/add-paypal/add-paypal.module').then( m => m.AddPaypalPageModule)
  },
  {
    path: 'add-visa-card',
    loadChildren: () => import('./Pages/add-visa-card/add-visa-card.module').then( m => m.AddVisaCardPageModule)
  },
  {
    path: 'add-upay',
    loadChildren: () => import('./Pages/add-upay/add-upay.module').then( m => m.AddUpayPageModule)
  },
  {
    path: 'add-master-card',
    loadChildren: () => import('./Pages/add-master-card/add-master-card.module').then( m => m.AddMasterCardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./Pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./Pages/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }