import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Guardían de enrutaje
import { GuardGuard } from './guard/guard.guard';

// Public 
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// Private 
import { HomeComponent } from './components/home/home.component';
import { CreateMessagesComponent } from './components/create-messages/create-messages.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { state: 0 },
  },
  {
    path: 'registrar',
    component: RegisterComponent,
    data: { state: 1 },
  },
  {
    path: 'user',
    component: HomeComponent,
    canActivate: [GuardGuard],
    children: [
      {
        path: '',
        component: ListMessagesComponent,
        data: { state: 2 }
      },
      {
        path: 'messages/:id',
        component: ListMessagesComponent,
        data: { state: 3 }
      },
      {
        path: 'create',
        component: CreateMessagesComponent,
        data: { state: 4 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
