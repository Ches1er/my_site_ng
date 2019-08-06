import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../../services/messages.service';
import {ImagesService} from '../../../services/http/images/images.service';
import {Image} from '../../../dto/images/Image';
import {AdminMessagesService} from '../../../services/admin/admin-messages.service';

@Component({
  selector: 'app-images-picker',
  templateUrl: './images-picker.component.html',
  styleUrls: ['./images-picker.component.less']
})
export class ImagesPickerComponent implements OnInit {

  selectedFile: File = null;
  private pImageUploaded = null;
  visible = false;
  private pImages: Array<Image> = [];

  constructor(private msgService: MessagesService,
              private imgService: ImagesService,
              private adminMessageService: AdminMessagesService) {
  }

  ngOnInit() {
    this.imageUploaded = null;
    this.adminMessageService
      .imagesPickerWindowShowMessage
      .subscribe(resp => this.visible = true);
    this.updateImages();
  }

  get images(): Array<Image> {
    return this.pImages;
  }

  set images(value: Array<Image>) {
    this.pImages = value;
  }
  get imageUploaded(): any {
    return this.pImageUploaded;
  }

  set imageUploaded(value: any) {
    this.pImageUploaded = value;
  }

  public cancel() {
    this.visible = false;
  }

  private updateImages() {
    this.imgService.images.subscribe(images => this.images = images);
  }

  chooseImage(image: Image) {
    this.adminMessageService.imageHasChoosenMessage(image);
    this.cancel();
  }

  // Upload image

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.imgService.uploadImage(this.selectedFile).subscribe(resp => {
      this.updateImages();
      this.imageUploaded = resp.response;
      this.selectedFile = null;
    });
  }
}
