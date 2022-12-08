import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateMessagesComponent } from './components/create-messages/create-messages.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { TokenIntercetorService } from './services/token-intercetor.service';
import { ListMessagesComponent } from './list-messages/list-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateMessagesComponent,
    HomeComponent,
    ListMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenIntercetorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
