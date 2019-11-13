import {User} from './User';

export class UserResponse {

  constructor(private pData: Array<User>) {
  }

  get data(): Array<User> {
    return this.pData;
  }

  set data(value: Array<User>) {
    this.pData = value;
  }
  public static fromJson(jsonObj: any): UserResponse {
    return new UserResponse(jsonObj.map(e => User.fromJson(e)));
  }
}
