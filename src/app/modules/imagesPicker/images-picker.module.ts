import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesPickerComponent } from './images-picker/images-picker.component';
import {MessagesService} from '../../services/messages.service';
import {ReactiveFormsModule} from '@angular/forms';
import {ImagesService} from '../../services/http/images/images.service';
import {AdminMessagesService} from '../../services/admin/admin-messages.service';

@NgModule({
  declarations: [ImagesPickerComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [ImagesPickerComponent],
  providers: [MessagesService, ImagesService, AdminMessagesService]
})
export class ImagesPickerModule { }
