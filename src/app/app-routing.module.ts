import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';
import { SignUpComponent } from '@components/sign-up/sign-up.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { InvitationComponent } from '@components/invitation/invitation.component';

import { AuthGuard } from '@guards/auth.guard';


const routes: Routes = [
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'signup',
    component: SignUpComponent
},
{
    path: '',
    canActivate: [AuthGuard],
    component: DashboardComponent
},
{
    path: 'invitations',
    canActivate: [AuthGuard],
    component: InvitationComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
