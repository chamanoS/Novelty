import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JoyrideModule } from "ngx-joyride";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';
import { DisplayComponent } from '../../components/display/display.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { ResetPasswordComponent } from '../../components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MatDialogModule } from "@angular/material";
import { LegalComponent } from '../../components/legal/legal.component';
import { FinanceComponent } from '../../components/finance/finance.component';
import { JwtModule } from "@auth0/angular-jwt";
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { DigitalMarketComponent } from '../../components/digital-market/digital-market.component';
import { DevelopersComponent } from '../../components/developers/developers.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { InstructionsComponent } from '../../components/instructions/instructions.component';
import { DMredesignComponent } from '../../components/dmredesign/dmredesign.component';
import { IdeasComponent } from '../../components/ideas/ideas.component';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { EvaluationComponent } from 'src/app/components/evaluation/evaluation.component';
import { JourneyComponent } from "src/app/components/journey/journey.component";
import { RatingsComponent } from "src/app/components/ratings/ratings.component";
import { LegalJourneyComponent } from '../../components/legal-journey/legal-journey.component';
import { BridgeSpinnerComponent } from '../../components/bridge-spinner/bridge-spinner.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LegalfinanceComponent } from '../../components/legalfinance/legalfinance.component';
import {MatSelectModule} from '@angular/material/select';

import { FlexLayoutModule } from "@angular/flex-layout";
import { EvaluateComponent } from '../../components/evaluate/evaluate.component';
import { PlanningComponent } from '../../components/planning/planning.component';
import { NavStepperComponent } from '../../components/nav-stepper/nav-stepper.component';
import { LandComponent } from '../../components/land/land.component';
export function tokenGetter() {
  return sessionStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    ClientComponent,
    RegisterComponent,
    LoginComponent,
    DisplayComponent,
    LandingComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DialogComponent,
    LegalComponent,
    FinanceComponent,
    DigitalMarketComponent,
    DevelopersComponent,
    ProfileComponent,
    DashboardComponent,
    InstructionsComponent,
    DMredesignComponent,
    IdeasComponent,
    QuestionComponent,
    EvaluationComponent,
    JourneyComponent,
    RatingsComponent,
    LegalJourneyComponent,
    LegalfinanceComponent,
    EvaluateComponent,
    PlanningComponent,
    BridgeSpinnerComponent,
    NavStepperComponent,
    LandComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatMenuModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    MatExpansionModule,
    MatTabsModule,
    NgbModule,
    JoyrideModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:5001"],
        blacklistedRoutes: ["localhost:5001//api/v1/users/login"],
      },
    }),
  ],
  providers: [AuthService, AuthGuard, JourneyComponent, RatingsComponent, ClientComponent],
  entryComponents: [DialogComponent, QuestionComponent, InstructionsComponent],
  bootstrap: [
    DashboardComponent,
    IdeasComponent,
    LegalComponent,
    DigitalMarketComponent,
    LegalJourneyComponent,
    NavStepperComponent
  ],
  exports: [IdeasComponent],
})
export class ClientModule {}
