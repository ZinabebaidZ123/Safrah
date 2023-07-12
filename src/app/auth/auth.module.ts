import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafraSignInPageComponent } from './safra-sign-in-page/safra-sign-in-page.component';
import { SafraSignUpPageComponent } from './safra-sign-up-page/safra-sign-up-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SafraSignInPageComponent , SafraSignUpPageComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SafraSignInPageComponent , 
    SafraSignUpPageComponent
  ]
})
export class AuthModule { }
