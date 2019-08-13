import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-images-viewer',
  templateUrl: './images-viewer.component.html',
  styleUrls: ['./images-viewer.component.less']
})
export class ImagesViewerComponent implements OnInit {
  private pVisible = false;
  private pPath: string;

  constructor(private msgService: MessagesService) {
  }

  ngOnInit() {
    this.visible = false;
    this.msgService.imagesViewerShow.subscribe(path => {
      this.visible = true;
      this.path = path;
    });
  }

  get visible(): boolean {
    return this.pVisible;
  }

  set visible(value: boolean) {
    this.pVisible = value;
  }

  get path(): string {
    return this.pPath;
  }

  set path(value: string) {
    this.pPath = value;
  }

  public close() {
    this.visible = false;
  }

}
