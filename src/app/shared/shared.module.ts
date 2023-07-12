import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutDiplomasNavbarComponent } from './about-diplomas-navbar/about-diplomas-navbar.component';
import { AboutDiplomasFooterComponent } from './about-diplomas-footer/about-diplomas-footer.component';
// import { NavbarPagesModule } from '../navbar-pages/navbar-pages.module';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AboutDiplomasNavbarComponent,
    AboutDiplomasFooterComponent,
   
  ],
  imports: [
    CommonModule ,
    // NavbarPagesModule,
    RouterModule

  ],
  exports: [
    NavbarComponent ,
    FooterComponent ,
    AboutDiplomasNavbarComponent,
    AboutDiplomasFooterComponent 

  ]
})
export class SharedModule { }
