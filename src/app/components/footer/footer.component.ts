import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {Branch} from '../../dto/Branch/Branch';
import {ContactsService} from '../../services/http/contacts/contacts.service';
import {BrandsService} from '../../services/http/brands/brands.service';
import {Brand} from '../../dto/Brand/Brand';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  private pBranches: Array<Branch> = [];
  private pBrands: Array<Brand> = [];
  private pAdminLoggedIn;
  private pUserLoggedIn;
  constructor(@Inject(MessagesService) private msgService: MessagesService,
              private contactsService: ContactsService,
              @Inject(BrandsService) private brandService: BrandsService) { }

  ngOnInit() {
    this.unlogUser();
    this.msgService.adminLoggedInMessage.subscribe(resp => this.adminLoggedIn = true);
    this.msgService.loginSuccessMessage.subscribe(resp => this.userLoggedIn = true);
    this.msgService.logoutSuccessMessage.subscribe(m => this.unlogUser());
    this.contactsService.branches.subscribe(branches => {
      this.branches = branches;
    });
    this.brandService.allBrands.subscribe(b => this.brands = b);
  }

  get adminLoggedIn(): boolean {
    return this.pAdminLoggedIn;
  }

  set adminLoggedIn(value: boolean) {
    this.pAdminLoggedIn = value;
  }
  get branches(): Array<Branch> {
    return this.pBranches;
  }

  set branches(value: Array<Branch>) {
    this.pBranches = value;
  }
  get brands(): Array<Brand> {
    return this.pBrands;
  }

  set brands(value: Array<Brand>) {
    this.pBrands = value;
  }
  get userLoggedIn() {
    return this.pUserLoggedIn;
  }

  set userLoggedIn(value) {
    this.pUserLoggedIn = value;
  }
  unlogUser() {
    this.adminLoggedIn = false;
    this.userLoggedIn = false;
  }


}
