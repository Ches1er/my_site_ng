import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlConfig} from '../../../config/url-config';
import {Observable} from 'rxjs';
import {Client} from '../../../dto/clients/Client';
import {map} from 'rxjs/operators';
import {ClientsResponse} from '../../../dto/clients/ClientsResponse';

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
}
