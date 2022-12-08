import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

export interface mensaje {
  icon?: any;
  mensaje?: any;
  titulo?: any;
  confirm?: any;
}

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  Toast() {
    return Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true
    });
  }

  SuccessAlert(mensaje: mensaje) {
    this.Toast().fire({
      icon: 'success',
      title: mensaje
    });
  }

  Alert(mensaje: mensaje) {
    Swal.fire({
      icon: mensaje.icon,
      title: mensaje.titulo,
      text: mensaje.mensaje,
      padding: '2em',
      showConfirmButton: false,
      showCloseButton: true,
      timer: 4000,
      timerProgressBar: true
    });
  }
}
