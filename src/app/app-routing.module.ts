import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Services
import { AuthGuard } from './shared/services/auth/auth.guard';

// Components
import { HologramsComponent } from "./components/holograms/holograms.component";
import { HologramComponent } from "./components/hologram/hologram.component";
import { AddHologramComponent } from "./components/add-hologram/add-hologram.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'holograms',
  },
  {
    path: 'holograms',
    component: HologramsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'hologram/:hologramid',
    component: HologramComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-hologram',
    component: AddHologramComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
