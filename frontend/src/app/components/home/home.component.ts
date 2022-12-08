import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from 'src/app/material/router.animation';
import { AlertsService } from 'src/app/services/alerts.service';
import { ApiService } from 'src/app/services/api.service';
import { MessagesService } from 'src/app/services/messages.service';
import { TitleService } from 'src/app/services/title.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition],
})
export class HomeComponent {
  title = 'Messages';
  id: string = '';

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }

  constructor(
    private titleService: TitleService,
    private userService: UserService,
    public api: ApiService,
    public token: TokenService,
  ) {
    this.titleService.setTitle(this.title);

    this.userService.Perfil().subscribe((res) => {})
  }
}
