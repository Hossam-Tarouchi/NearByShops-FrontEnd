import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ShopsComponent} from './shops/shops.component';
import {LikedShopsComponent} from './liked-shops/liked-shops.component';
import {AuthGuardGuard} from './auth-guard.guard';

const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'shops', component: ShopsComponent,   canActivate: [AuthGuardGuard]},
  {path: 'likedshops', component: LikedShopsComponent, canActivate: [AuthGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
