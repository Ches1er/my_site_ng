import {Client} from './Client';

export class ClientsResponse {

  constructor(private pData: Array<Client>) {
  }

  get data(): Array<Client> {
    return this.pData;
  }

  set data(value: Array<Client>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): ClientsResponse {
    return new ClientsResponse(jsonObj.map(c => Client.fromJson(c)));
  }
}
