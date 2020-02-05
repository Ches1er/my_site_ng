export class User {

  constructor(private pId: number,
              private pName: string,
              private pEmail: string,
              private pEmailVerifiedAt,
              private pPhones: string,
              private pConfirmedClient: string,
              private pApiToken: string,
              private pRememberToken: string
              ) {
  }

  get id(): number {
    return this.pId;
  }

  set id(value: number) {
    this.pId = value;
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get email(): string {
    return this.pEmail;
  }

  set email(value: string) {
    this.pEmail = value;
  }

  get emailVerifiedAt() {
    return this.pEmailVerifiedAt;
  }

  set emailVerifiedAt(value) {
    this.pEmailVerifiedAt = value;
  }

  get phones(): string {
    return this.pPhones;
  }

  set phones(value: string) {
    this.pPhones = value;
  }

  get confirmedClient(): string {
    return this.pConfirmedClient;
  }

  set confirmedClient(value: string) {
    this.pConfirmedClient = value;
  }
  get apiToken(): string {
    return this.pApiToken;
  }

  set apiToken(value: string) {
    this.pApiToken = value;
  }

  get rememberToken(): string {
    return this.pRememberToken;
  }

  set rememberToken(value: string) {
    this.pRememberToken = value;
  }

  public static fromJson(jsonObj: any): User {
    return new User(
      jsonObj.id,
      jsonObj.name,
      jsonObj.email,
      jsonObj.email_verified_at,
      jsonObj.phones,
      jsonObj.confirmed_client,
      jsonObj.api_token,
      jsonObj.remember_token);
  }
}
