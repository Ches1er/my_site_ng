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
    email: new FormControl('', Validators.required),
    phones: new FormArray([
      new FormControl('+380', Validators.required),
      new FormControl('+380', Validators.required)
    ]),
    confirmedClient: new FormControl(''),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', [Validators.required])
  });

  visible = false;
  error: string = null;

  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(HttpAuthService) private httpAuthService: HttpAuthService) {
  }

  ngOnInit() {
    this.msgService.registerWindowShowMessage.subscribe(m => this.visible = true);
  }

  public cancel() {
    this.visible = false;
  }

  onSubmit() {
    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.error = 'Пароли не совпадают';
    } else {
      this.error = null;
      this.httpAuthService.register(this.registerForm.value).subscribe(m => {
        console.log(m);
        if (m.error) {
          alert(m.error);
        } else {
          alert(m.message);
          this.cancel();
        }
      });
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
}

