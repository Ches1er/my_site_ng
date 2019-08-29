import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpUrlEncodingCodec} from '@angular/common/http';
import {UrlConfig} from '../../../config/url-config';
import {Observable} from 'rxjs';
import {Client} from '../../../dto/clients/Client';
import {map} from 'rxjs/operators';
import {ClientsResponse} from '../../../dto/clients/ClientsResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  urlConfig: UrlConfig = new UrlConfig();
  urlEncode = new HttpUrlEncodingCodec();

  constructor(@Inject(HttpClient) private http: HttpClient,
              private cookieService: CookieService) {
  }

  client(id: number): Observable<Client> {
    return this.http.get(this.urlConfig.SHOW_CLIENT + id)
      .pipe(map(client => Client.fromJson(client)));
  }

  packClients(): Observable<Array<Client>> {
    return this.http.get(this.urlConfig.SHOW_CLIENTS + 'pack')
      .pipe(map(resp => ClientsResponse.fromJson(resp)))
      .pipe(map(clientResponse => clientResponse.data));
  }

  buildClients(): Observable<Array<Client>> {
    return this.http.get(this.urlConfig.SHOW_CLIENTS + 'build')
      .pipe(map(resp => ClientsResponse.fromJson(resp)))
      .pipe(map(clientResponse => clientResponse.data));
  }
  allClients(): Observable<Array<Client>> {
    return this.http.get(this.urlConfig.SHOW_CLIENTS + 'all')
      .pipe(map(resp => ClientsResponse.fromJson(resp)))
      .pipe(map(clientResponse => clientResponse.data));
  }
  private getApiToken(): any {
    if (localStorage.length > 0) {
      const data = JSON.parse(localStorage.getItem('tokenData'));
      return data.api_token;
    }
    return false;
  }
  add(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('api_token', this.getApiToken());
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('img', data.img);
    params.append('desc', this.urlEncode.encodeValue(data.desc));
    params.append('salesArea', data.salesArea);
    params.append('products', data.products.join(','));
    return this.http.post(this.urlConfig.ADD_CLIENT, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
}
