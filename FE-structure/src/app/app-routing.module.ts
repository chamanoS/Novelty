import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ForgotPsComponent } from './forgot-ps/forgot-ps.component';
import { DisplayInformationComponent } from './display-information/display-information.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'landing', component: LandingpageComponent },
  { path: 'reset-password/:token', component: ForgotPsComponent },
  { path: 'display', component: DisplayInformationComponent },
  { path: '**', redirectTo: '/landing', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
