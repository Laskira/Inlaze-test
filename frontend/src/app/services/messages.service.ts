import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private api: ApiService, private http: HttpClient) {}

  URL = this.api.url() + 'message/';

  CrearMensaje(message: any) {
    return this.http.post(this.URL, message);
  }

  ObtenerMensajes() {
    return this.http.get(this.URL);
  }

  ObtenerMensajeUsuario(id: string) {
    return this.http.get(this.URL + '/show/' + id);
  }
}
