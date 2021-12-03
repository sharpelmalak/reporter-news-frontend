import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { LoginComponent } from './views/login/login.component';
import { NewsComponent } from './views/news/news.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { UpdateNewsComponent } from './views/update-news/update-news.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'editprofile',component:EditProfileComponent,canActivate:[AuthGuardService]},
  {path:'news',component:NewsComponent,canActivate:[AuthGuardService]},
  {path:'addnews',component:AddNewsComponent,canActivate:[AuthGuardService]},
  {path:'editnews/:id',component:UpdateNewsComponent,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
