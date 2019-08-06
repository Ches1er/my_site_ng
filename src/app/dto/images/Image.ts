export class Image {

  constructor(private pId: number, private pName: string, private pPath: string) {
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

  get path(): string {
    return this.pPath;
  }

  set path(value: string) {
    this.pPath = value;
  }
  public static fromJson(jsonObj: any): Image {
    return new Image(jsonObj.id, jsonObj.name, jsonObj.path);
  }
}
