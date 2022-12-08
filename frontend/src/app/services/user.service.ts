import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService, private http: HttpClient) {}

  URL = this.api.url() + 'users/';

  Acceder(user: any) {
    return this.http.post(this.URL + '/acceder', user);
  }

  Perfil() {
    return this.http.get(this.URL);
  }

  CrearUser(user: any) {
    return this.http.post(this.URL, user);
  }

  ObtenerUser() {
    return this.http.get(this.URL + '/cuentas');
  }
}