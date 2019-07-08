import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';
import {HttpAuthService} from '../../../services/http/http-auth.service';

@Component({
  selector: 'app-header-auth-block',
  templateUrl: './header-auth-block.component.html',
  styleUrls: ['./header-auth-block.component.less']
})
export class HeaderAuthBlockComponent implements OnInit {

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(HttpAuthService) private httpAuthService: HttpAuthService) {
  }

  ngOnInit() {

  }

}
