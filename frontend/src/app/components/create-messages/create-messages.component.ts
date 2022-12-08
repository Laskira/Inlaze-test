import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';
import { MessagesService } from 'src/app/services/messages.service';
import { TitleService } from 'src/app/services/title.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-messages',
  templateUrl: './create-messages.component.html',
  styleUrls: ['./create-messages.component.scss']
})
export class CreateMessagesComponent {
  title = 'Create Messages';
  User: any;

  constructor(
    private messagesService: MessagesService,
    private userService: UserService,
    private router: Router,
    private alerts: AlertsService,
    private TitleService: TitleService
  ) {
    this.TitleService.setTitle(this.title);

    this.userService.ObtenerUser().subscribe(
      (res: any) => {
        this.User = res;
      },
      (err: any) => console.log(err)
    );
  }

  FormMessage = new FormGroup({
    TitleMessage: new FormControl('', [Validators.required, Validators.min(4)]),
    Message: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  Submit() {
    this.messagesService.CrearMensaje(this.FormMessage.value).subscribe(
      (res: any) => {
        this.router.navigate(['message']);
      },
      (err: any) => this.alerts.Alert(err.error)
     
    );

    console.log(this.FormMessage.value)
  }
}
