import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { TokenService } from 'src/app/services/token.service';
import { TitleService } from 'src/app/services/title.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  title = 'Login';
  hide = true;
  constructor(
    private userService: UserService,
    private router: Router,
    private alerts: AlertsService,
    private token: TokenService,
    private TitleService: TitleService
  ) {
    this.TitleService.setTitle(this.title);
  }

  FormLogin = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.min(4)]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.router.navigate(['/user']);
    }
  }

  login() {
    this.userService.Acceder(this.FormLogin.value).subscribe(
      (res) => {
        if (res) {
          // @ts-ignore
          console.log(res.mensaje);
          // @ts-ignore
          localStorage.setItem('token', res.token);
          this.router.navigate(['user/']);
        }
      },
      (err) => {
        this.alerts.Alert(err.error);
      }
    );
  }

}
