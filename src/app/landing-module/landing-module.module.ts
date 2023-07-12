import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SaraRegPageComponent } from './sara-reg-page/sara-reg-page.component';
import { SharedModule } from '../shared/shared.module';
import { TopLandingSectionsComponent } from './top-landing-sections/top-landing-sections.component';
import { CenteredLandingSectionsComponent } from './centered-landing-sections/centered-landing-sections.component';
import { LeadingComment } from '@angular/compiler';
import { LandingComponent } from './landing/landing.component';
import { AboutDiplomasComponent } from './about-diplomas/about-diplomas.component';
import { AuthModule } from '../auth/auth.module';
import { BannerComponent } from './banner/banner.component';
import { ProgramsComponent } from './programs/programs.component';
import { BannerSideBarComponent } from './banner-side-bar/banner-side-bar.component';
import { PrayTimeComponent } from './pray-time/pray-time.component';
// import { NavbarPagesModule } from '../navbar-pages/navbar-pages.module';
@NgModule({
  declarations: [ SaraRegPageComponent , TopLandingSectionsComponent , CenteredLandingSectionsComponent , LandingComponent , AboutDiplomasComponent, BannerComponent, ProgramsComponent, BannerSideBarComponent, PrayTimeComponent],
  imports: [
    CommonModule ,
    SharedModule ,
    AuthModule ,
    RouterModule,
    // NavbarPagesModule
  ],
  exports : [BannerComponent, SaraRegPageComponent , PrayTimeComponent ,
     TopLandingSectionsComponent , CenteredLandingSectionsComponent , LandingComponent , AboutDiplomasComponent , ProgramsComponent]
})
export class LandingModuleModule { }
