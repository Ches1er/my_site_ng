import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpAuthService} from '../../../services/http/http-auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\\.[.a-zA-Z0-9]+$')]),
    phones: new FormArray([
      new FormControl('+380', Validators.required)
    ]),
    confirmedClient: new FormControl(''),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', [Validators.required])
  });
  visible = false;
  private pAuthMessage: string = null;

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(HttpAuthService) private httpAuthService: HttpAuthService) {
  }
  get authMessage(): string {
    return this.pAuthMessage;
  }

  set authMessage(value: string) {
    this.pAuthMessage = value;
  }

  ngOnInit() {
    this.registerForm.patchValue({name: '', email: '', confirmedClient: '', password: '', confirmPassword: ''});
    this.msgService.registerWindowShowMessage.subscribe(m => this.visible = true);
  }

  public cancel() {
    this.visible = false;
  }

  onSubmit() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.authMessage = 'Пароли не совпадают';
    } else {
      this.authMessage = null;
      this.httpAuthService.register(this.registerForm.value).subscribe(resp => this.responseHandler(resp));
    }
  }

  AddPhone(e) {
    (this.registerForm.controls.phones as FormArray)
      .push(new FormControl('+380', Validators.required));
    e.preventDefault();
  }

  DelPhone(i: any, e) {
    (this.registerForm.controls.phones as FormArray)
      .removeAt(i);
    e.preventDefault();
  }

/*  private responseHandler(resp: string) {
    if (resp === 'User exists') {
      this.authMessage = 'Такой пользователь уже существует';
    }
    if (resp === 'Registration succeed') {
      const data = ['register', resp];
      this.msgService.registerSuccessMessage(data);
      this.cancel();
    }
    if (resp === 'Registration error') {
      this.authMessage = 'Ошибка при регистрации! Попробуйте еще раз';
    }
  }*/
  private responseHandler(resp: string) {
    const data = ['register', resp];
    this.msgService.registerSuccessMessage(data);
    this.cancel();
  }
}

