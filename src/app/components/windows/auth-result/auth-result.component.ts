import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-auth-result',
  templateUrl: './auth-result.component.html',
  styleUrls: ['./auth-result.component.less']
})
export class AuthResultComponent implements OnInit {
  visible = false;
  definer = null;
  message = null;

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
    this.visible = false;
    this.msgService.registerSuccess.subscribe(data => {
        this.visible = true;
        this.definer = data[0];
        this.messageHandler(data[1]);
    });
  }
  public cancel() {
    this.visible = false;
    if (this.message === 'Пользователь с таким именем уже существует') {this.msgService.registerWindowShow(); }
  }
  private messageHandler(message: string) {
    if (message === 'User exists') {
      this.message = 'Пользователь с таким именем уже существует';
    }
    if (message === 'Registration succeed') { this.message = 'Для окончания регистрации остался последний шаг.\n' +
      '        Через некоторое время на вашу почту придет письмо.\n' +
      '        Перейдите по ссылке, указанной в этом письме.\n' +
      '        После этого вы сможете полностью использовать функционал нашего сайта.\n' +
      '        Спасибо.';
    }
  }

}
