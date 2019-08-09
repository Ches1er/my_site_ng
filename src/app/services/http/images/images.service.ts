import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Image} from '../../../dto/images/Image';
import {UrlConfig} from '../../../config/url-config';
import {map} from 'rxjs/operators';
import {ImagesResponse} from '../../../dto/images/ImagesResponse';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
  }

  get images(): Observable<Array<Image>> {
    return this.http.get(this.urlConfig.SHOW_IMAGES)
      .pipe(map(resp => ImagesResponse.fromJson(resp)))
      .pipe(map(imgResp => imgResp.data));
  }

  uploadImage(file: File): Observable<any> {
    const uploadData = new FormData();
    uploadData.append('file', file, file.name);
    return this.http.post(this.urlConfig.UPLOAD_IMAGE, uploadData)
      .pipe(resp => resp);
  }
}
