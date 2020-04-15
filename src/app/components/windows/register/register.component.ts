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
  // "loading" variable use for ngx-loading component
  public loading = false;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('',
      [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_]+'),
        Validators.minLength(3)
      ]
    ),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\\.[.a-zA-Z0-9]+$')
    ]),
    phones: new FormArray([
      new FormControl('+380', [Validators.required, Validators.pattern('\\+[0-9]{12}')])
    ]),
    confirmedClient: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
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
    this.clearFormFields();
    this.msgService.registerWindowShowMessage.subscribe(m =>{
      this.clearFormFields();
      this.visible = true;
    });
  }
  private clearFormFields() {
    this.registerForm.patchValue({name: '', email: '', confirmedClient: '', password: '', confirmPassword: ''});
  }

  public cancel() {
    this.visible = false;
  }

  onSubmit() {
    this.loading = true;
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.loading = false;
      this.authMessage = 'Пароли не совпадают';
    } else {
      this.authMessage = null;
      this.httpAuthService.register(this.registerForm.value).subscribe(resp => {
        this.loading = false;
        this.responseHandler(resp);
      });
    }
  }

  AddPhone(e) {
    (this.registerForm.controls.phones as FormArray)
      .push(new FormControl('+380', [Validators.required, Validators.pattern('\\+[0-9]{12}')]));
    e.preventDefault();
  }

  DelPhone(i: any, e) {
    (this.registerForm.controls.phones as FormArray)
      .removeAt(i);
    e.preventDefault();
  }

  private responseHandler(resp: string) {
    const data = ['register', resp];
    this.msgService.registerSuccessMessage(data);
    this.cancel();
  }
}

