import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule,FacebookLoginProvider,GoogleLoginProvider,AuthServiceConfig } from 'angular-6-social-login';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ViewEventsComponent } from './view-events/view-events.component';
import { FileSelectDirective, FileUploadModule,FileDropDirective } from 'ng2-file-upload';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id : FacebookLoginProvider.PROVIDER_ID,
        provider : new FacebookLoginProvider('2232445330183365')
      }
    ]
  )
  return config
}


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialComponent,
    ViewEventsComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocialLoginModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,EventService,AuthGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
},{
  provide : AuthServiceConfig,
  useFactory : getAuthServiceConfigs
}],
  bootstrap: [AppComponent],
})
export class AppModule { }
