import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url() {
    return 'http://localhost:4000/';
  }
}
