import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../dto/User/User';
import {HttpAuthService} from '../../../../services/http/http-auth.service';
import {CookieService} from 'ngx-cookie-service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.less']
})
export class ProfileMainComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9-_]+'),
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\\.[.a-zA-Z0-9]+$')
    ]),
    phones: new FormArray([]),
    confirmedClient: new FormControl(''),
    emailVerifiedAt: new FormControl('')
  });
  private pCurrentUser: User = null;
  private pOnSubmitResponse: string;

  constructor(private httpAuthService: HttpAuthService, private cookieService: CookieService) {
  }

  ngOnInit() {
    this.updateUser();
  }

  private updateUser() {
    this.profileForm.get('phones').clear();
    this.httpAuthService.user(this.cookieService.get('api_token')).subscribe(user => {
      this.currentUser = user;
      this.fillInForm(user);
    });
  }

  get currentUser(): User {
    return this.pCurrentUser;
  }

  set currentUser(value: User) {
    this.pCurrentUser = value;
  }

  get onSubmitResponse() {
    return this.pOnSubmitResponse;
  }

  set onSubmitResponse(value) {
    this.pOnSubmitResponse = value;
  }

  private fillInForm(user: User) {
    this.profileForm.patchValue({
      name: user.name,
      id: user.id,
      email: user.email,
      confirmedClient: user.confirmedClient,
      emailVerifiedAt: user.emailVerifiedAt
    });
    const phones = user.phones.split(',');
    const formPhones = this.profileForm.controls.phones as FormArray;
    phones.map(e => {
      formPhones.push(new FormControl(e, [Validators.required, Validators.pattern('\\+[0-9]{12}')]));
    });
  }

  onSubmit() {
    this.httpAuthService.updateUser(this.profileForm.value).subscribe(resp => {
      this.updateUser();
      if (resp === 'update success') this.onSubmitResponse = 'Данные успешно обновлены';
      if (resp === 'error') this.onSubmitResponse = 'Ой! Что-то пошло не так, повторите процедуру позже.';
    });
  }

  DelPhone(event, i) {
    event.preventDefault();
    (this.profileForm.controls.phones as FormArray)
      .removeAt(i);
  }

  AddPhone(event) {
    event.preventDefault();
    (this.profileForm.controls.phones as FormArray)
      .push(new FormControl('+380', [Validators.required, Validators.pattern('\\+[0-9]{12}')]));
  }

  sendVerificationEmail(event) {
    event.preventDefault();
    this.httpAuthService.rememberVerification().subscribe(resp => {
      if (resp === 'Letter has sent') this.onSubmitResponse = 'Повторное письмо отправлено';
      // if (resp === 'error') this.onSubmitResponse = 'Ой! Что-то пошло не так, повторите процедуру позже.';
    });
  }
}
