import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing-module/landing/landing.component';
import { AboutDiplomasComponent } from './landing-module/about-diplomas/about-diplomas.component';
import { SaraRegPageComponent } from './landing-module/sara-reg-page/sara-reg-page.component';
import { SafraSignInPageComponent } from './auth/safra-sign-in-page/safra-sign-in-page.component';
import { SafraSignUpPageComponent } from './auth/safra-sign-up-page/safra-sign-up-page.component';
// import { NavbarPagesModule } from './navbar-pages/navbar-pages.module';
import { AboutCharityComponent } from './navbar-pages/about-charity/about-charity.component';
import { GovernanceComponent } from './navbar-pages/governance/governance.component';
import { ReportsComponent } from './navbar-pages/reports/reports.component';
import { ProgramsComponent } from './landing-module/programs/programs.component';
import { NewsComponent } from './navbar-pages/news/news.component';
import { ImgGalleryComponent } from './navbar-pages/img-gallery/img-gallery.component';
import { NewspapperNewsComponent } from './navbar-pages/newspapper-news/newspapper-news.component';
import { SuggestionsComplaintsComponent } from './navbar-pages/suggestions-complaints/suggestions-complaints.component';
import { LogInComponent } from './navbar-pages/log-in/log-in.component';
import { EmploymentComponent } from './navbar-pages/employment/employment.component';
import { NewsDetailsComponent } from './navbar-pages/news-details/news-details.component';
import { VideoGalleryComponent } from './navbar-pages/video-gallery/video-gallery.component';
import { PrayTimeComponent } from './landing-module/pray-time/pray-time.component';
const routes: Routes = [
  {path:'',redirectTo:"landingPage" , pathMatch:'full'},
  {path:"landingPage", component:LandingComponent},
  {path:"about-diplomas", component:AboutDiplomasComponent},
  {path:"reg-page", component:SaraRegPageComponent},
  {path:"signIn-page", component:SafraSignInPageComponent},
  {path:"signUp-page", component:SafraSignUpPageComponent},
  {path:"programs-page", component:ProgramsComponent},
  {path:"pray-times", component:PrayTimeComponent},
  // navbar routes--------------------------------------------------
  {path:"about-charity-page", component:AboutCharityComponent},
  {path:"governance-page", component:GovernanceComponent},
  {path:"reports-page", component:ReportsComponent},
  {path:"news-page", component:NewsComponent},
  {path:"img-gallery-page", component:ImgGalleryComponent},
  {path:"video-gallery-page", component:VideoGalleryComponent},
  {path:"newspapper-page", component:NewspapperNewsComponent},
  {path:"news-details-page", component:NewsDetailsComponent},
  {path:"suggestion&complaints-page", component:SuggestionsComplaintsComponent},
  {path:"logIn-page", component:LogInComponent},
  {path:"employment-page", component:EmploymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
