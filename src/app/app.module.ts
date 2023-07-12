import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { LandingComponent } from './landing-module/landing/landing.component';
import { LandingModuleModule } from './landing-module/landing-module.module';
import { NavbarPagesModule } from './navbar-pages/navbar-pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { EmbedVideo, EmbedVideoService } from 'ngx-embed-video';

@NgModule({
  declarations: [
    AppComponent
  ],


  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SharedModule,
    AuthModule,
    LandingModuleModule,
    NavbarPagesModule,
    BrowserAnimationsModule,
      // BrowserModule, EmbedVideo.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
