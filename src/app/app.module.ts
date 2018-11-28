import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { HologramService } from "./shared/services/hologram/hologram.service";
import { UserService } from "./shared/services/user/user.service";
import { AuthService } from "./shared/services/auth/auth.service";
import { AuthGuard } from "./shared/services/auth/auth.guard";

// Pipes
import { CapitalizePipe } from "./shared/pipes/capitalize.pipe";

// components
import { AppComponent } from './app.component';
import { HologramsComponent } from './components/holograms/holograms.component';
import { HologramComponent } from './components/hologram/hologram.component';
import { AddHologramComponent } from './components/add-hologram/add-hologram.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HologramsComponent,
    HologramComponent,
    AddHologramComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SettingsComponent,
    RegisterComponent,
    LoginComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HologramService,
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
