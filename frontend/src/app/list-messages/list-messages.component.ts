import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from '../services/messages.service';
import { TitleService } from 'src/app/services/title.service';
@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent {
  title: string = "Messages";
  info: any;
  noData = false;

  constructor(
    private messageService: MessagesService,
    private router: Router,
    private TitleService: TitleService
  ) {
    this.TitleService.setTitle(this.title);

    this.messageService.ObtenerMensajes().subscribe((data: {}) => {
      // @ts-ignore
      this.info = data;
      if (data) {
        // @ts-ignore
        if (data.length === 0) {
          this.noData = true;
        }
      }
      console.log(this.info)
    });
  }

}
