import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlConfig} from '../../../config/url-config';
import {Observable} from 'rxjs';
import {Client} from '../../../dto/clients/Client';
import {map} from 'rxjs/operators';
import {ClientsResponse} from '../../../dto/clients/ClientsResponse';
import {ResultResponse} from '../../../dto/server_response/ResultResponse';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  urlConfig: UrlConfig = new UrlConfig();

  constructor(@Inject(HttpClient) private http: HttpClient) {
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
  add(data: any, action: string): Observable<string> {
    const params = new FormData();
    params.append('action', action);
    params.append('id', data.id);
    params.append('name', data.name);
    params.append('img', data.img);
    params.append('desc', data.desc);
    params.append('salesArea', data.salesArea);
    return this.http.post(this.urlConfig.ADD_CLIENT, params)
      .pipe(map(resp => ResultResponse.fromJson(resp)))
      .pipe(map(ResResp => ResResp.response));
  }
/*    add(data: any, action: string){
      console.log(data);
      console.log(action);
    }*/
}
