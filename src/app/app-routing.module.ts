import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';

import { Notfound404Component } from './notfound404/notfound404.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  //path: '/dashboard' PagesRouitng
  //path: '/auth' AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: Notfound404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
