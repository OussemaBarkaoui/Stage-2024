import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";
import {HttpTokenInterceptor} from "./services/interceptor/http-token.interceptor";
import {JobRoutingModule} from "./modules/job/job-routing.module";
import { LoginRecruiterComponent } from './pages/login-recruiter/login-recruiter.component';
import { RegisterRecruiterComponent } from './pages/register-recruiter/register-recruiter.component';
import {TableBordModule} from "./modules/table-bord/table-bord.module";
import { ActivateAccountRecComponent } from './pages/activate-account-rec/activate-account-rec.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent,
    LoginRecruiterComponent,
    RegisterRecruiterComponent,
    ActivateAccountRecComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodeInputModule,
    JobRoutingModule,
    TableBordModule
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
