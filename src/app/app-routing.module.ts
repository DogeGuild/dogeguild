import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Screens/home/home.component';
import { LoginComponent } from './Screens/login/login.component';
import { AboutComponent } from './Screens/about/about.component';
import { GuildsComponent } from './Screens/guilds/guilds.component';
import { MyTeamComponent } from './Screens/my-team/my-team.component';
import { LibraryComponent } from './Screens/library/library.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guilds', component: GuildsComponent },
  { path: 'my-team', component: MyTeamComponent },
  { path: 'library', component: LibraryComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
