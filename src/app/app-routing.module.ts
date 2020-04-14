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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }