import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from 'src/app/material/router.animation';
import { AlertsService } from 'src/app/services/alerts.service';
import { TitleService } from 'src/app/services/title.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition],
})
export class RegisterComponent {
  title = 'Register';
  hide = true;

  FormRegister = new FormGroup({
    Nickname: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    Name: new FormControl('', [Validators.required, Validators.minLength(20)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(
    private userService: UserService,
    private alerta: AlertsService,
    private router: Router,
    private TitleService: TitleService
  ) {
    this.TitleService.setTitle(this.title);
  }

  ngOnInit(): void {}

  CreateUser() {
    this.userService.CrearUser(this.FormRegister.value).subscribe(
      (res) => {
        this.router.navigate(['user']);
      },
      (err) => this.alerta.Alert(err.error)
     
    );
  }
}
