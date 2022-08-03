import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../material/material.module';
import { AddapplicationComponent } from './../../modules/addapplication/addapplication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplistComponent } from './../../modules/applist/applist.component';
import { LoginComponent } from './../../modules/login/login.component';
import { ForgotpasswordComponent } from './../../modules/forgotpassword/forgotpassword.component';
import {
  RegisterComponentDialog,
  SignupComponent,
} from './../../modules/signup/signup.component';
// import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AddapplicationComponent,
    ApplistComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponentDialog,
    ForgotpasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DefaultModule {}
