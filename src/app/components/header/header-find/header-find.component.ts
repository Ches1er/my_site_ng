import {Component, Inject, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-header-find',
  templateUrl: './header-find.component.html',
  styleUrls: ['./header-find.component.less']
})
export class HeaderFindComponent implements OnInit {
  whatToFind = '';

  constructor(private router: Router,
              @Inject(MessagesService) private msgService: MessagesService) {
  }

  ngOnInit() {
  }

  public find() {
    if (this.whatToFind === '') {return null; }
    const navigationExtras: NavigationExtras = {
      queryParams: {findData: this.whatToFind}
    };
    this.router.navigate(['/find'], navigationExtras);
  }
}
