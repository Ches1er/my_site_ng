import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesViewerComponent } from './images-viewer/images-viewer.component';
import {MessagesService} from '../../services/messages.service';

@NgModule({
  declarations: [ImagesViewerComponent],
  imports: [
    CommonModule
  ],
  exports: [ImagesViewerComponent],
  providers: [MessagesService]
})
export class ImagesViewerModule { }
