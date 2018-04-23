import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: '../dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'admin',
    canActivate: [AuthGuardService],
    loadChildren: '../admin/admin.module#AdminModule'
  },
  {
    path: 'main',
    canActivate: [AuthGuardService],
    loadChildren: '../main/main.module#MainModule'
  },
  {
    path: 'demand',
    canActivate: [AuthGuardService],
    loadChildren: '../demand/demand.module#DemandModule'
  },
  {
    path: 'account',
    canActivate: [AuthGuardService],
    loadChildren: '../account/account.module#AccountModule'
  },
  {
    path: 'addon',
    canActivate: [AuthGuardService],
    loadChildren: '../addon/addon.module#AddonModule'
  },
 {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
