import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './Screens/home/home.component';
import { LoginComponent } from './Screens/login/login.component';
import { HeroDisplayComponent } from './Components/hero-display/hero-display.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LinkButtonComponent } from './Components/Buttons/link-button/link-button.component';
import { LargeButtonComponent } from './Components/Buttons/large-button/large-button.component';
import { SmallButtonComponent } from './Components/Buttons/small-button/small-button.component';
import { BannerComponent } from './Components/banner/banner.component';
import { BottomBarComponent } from './Components/bottom-bar/bottom-bar.component';
import { AboutComponent } from './Screens/about/about.component';
import { LibraryComponent } from './Screens/library/library.component';
import { GuildsComponent } from './Screens/guilds/guilds.component';
import { MyTeamComponent } from './Screens/my-team/my-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeroDisplayComponent,
    NavBarComponent,
    LinkButtonComponent,
    LargeButtonComponent,
    SmallButtonComponent,
    BannerComponent,
    BottomBarComponent,
    AboutComponent,
    LibraryComponent,
    GuildsComponent,
    MyTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
