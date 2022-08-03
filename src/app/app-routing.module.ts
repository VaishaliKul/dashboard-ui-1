import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AddapplicationComponent } from './modules/addapplication/addapplication.component';
import { ApplistComponent } from './modules/applist/applist.component';
import { LoginComponent } from './modules/login/login.component';
import { ForgotpasswordComponent } from './modules/forgotpassword/forgotpassword.component';
import { SignupComponent } from './modules/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'new-app',
        component: AddapplicationComponent,
      },
      {
        path: 'app-list',
        component: ApplistComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
