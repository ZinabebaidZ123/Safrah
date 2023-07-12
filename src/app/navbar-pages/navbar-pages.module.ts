import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutCharityComponent } from './about-charity/about-charity.component';
import { LandingModuleModule } from '../landing-module/landing-module.module';
import { SharedModule } from '../shared/shared.module';
import { GovernanceComponent } from './governance/governance.component';
import { ReportsComponent } from './reports/reports.component';
import { NewsComponent } from './news/news.component';
import { ImgGalleryComponent } from './img-gallery/img-gallery.component';
import { NewspapperNewsComponent } from './newspapper-news/newspapper-news.component';
import { SuggestionsComplaintsComponent } from './suggestions-complaints/suggestions-complaints.component';
import { LogInComponent } from './log-in/log-in.component';
import { EmploymentComponent } from './employment/employment.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { AboutDiplomasTopSectionsComponent } from './about-diplomas-top-sections/about-diplomas-top-sections.component';
import { AboutDiplomasCenteredSectionsComponent } from './about-diplomas-centered-sections/about-diplomas-centered-sections.component';
import { AboutDiplomasBottomSectionsComponent } from './about-diplomas-bottom-sections/about-diplomas-bottom-sections.component';


@NgModule({
  declarations: [
    AboutCharityComponent,
    GovernanceComponent,
    ReportsComponent,
    NewsComponent,
    ImgGalleryComponent,
    NewspapperNewsComponent,
    SuggestionsComplaintsComponent,
    LogInComponent,
    EmploymentComponent,
    NewsDetailsComponent,
    VideoGalleryComponent,
    AboutDiplomasTopSectionsComponent,
    AboutDiplomasCenteredSectionsComponent,
    AboutDiplomasBottomSectionsComponent
  ],
  imports: [
    CommonModule,
    LandingModuleModule ,
    SharedModule ,
    RouterModule
  ] ,
  exports: [
    AboutCharityComponent ,
    GovernanceComponent ,
    ReportsComponent,
    NewsComponent ,
    ImgGalleryComponent ,
    VideoGalleryComponent ,
    NewspapperNewsComponent ,
    NewsDetailsComponent,
    SuggestionsComplaintsComponent,
    LogInComponent
  ]
})
export class NavbarPagesModule { }
