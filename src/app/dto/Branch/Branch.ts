export class Branch {

  constructor(private pId: number,
              private pName: string,
              private pAddress: string,
              private pPhone: string,
              private pLong: number,
              private pLat: number,
              private pRoleId: number,
              private pRole: string) {
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

  get address(): string {
    return this.pAddress;
  }

  set address(value: string) {
    this.pAddress = value;
  }

  get phone(): string {
    return this.pPhone;
  }

  set phone(value: string) {
    this.pPhone = value;
  }

  get long(): number {
    return this.pLong;
  }

  set long(value: number) {
    this.pLong = value;
  }

  get lat(): number {
    return this.pLat;
  }

  set lat(value: number) {
    this.pLat = value;
  }

  get roleId(): number {
    return this.pRoleId;
  }

  set roleId(value: number) {
    this.pRoleId = value;
  }

  get role(): string {
    return this.pRole;
  }

  set role(value: string) {
    this.pRole = value;
  }

  public static fromJson(jsonObj: any): Branch {
    return new Branch(jsonObj.id,
      jsonObj.name,
      jsonObj.address,
      jsonObj.phone,
      jsonObj.long,
      jsonObj.lat,
      jsonObj.role_id,
      jsonObj.role);
  }
}
