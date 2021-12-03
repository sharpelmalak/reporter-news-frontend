import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { AuthService } from './services/auth.service';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProfileComponent } from './views/profile/profile.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { UpdateNewsComponent } from './views/update-news/update-news.component';
import { NewsComponent } from './views/news/news.component';
import { UserService } from './services/user.service';
import { NewsService } from './services/news.service';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProfileComponent,
    EditProfileComponent,
    AddNewsComponent,
    UpdateNewsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    NewsService,
    AuthGuardService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
