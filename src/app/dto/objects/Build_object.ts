export class BuildObject {

  constructor(private pName: string, private pDesc: string, private pPhoto: Array<string>) {
  }

  get name(): string {
    return this.pName;
  }

  set name(value: string) {
    this.pName = value;
  }

  get desc(): string {
    return this.pDesc;
  }

  set desc(value: string) {
    this.pDesc = value;
  }

  get photo(): Array<string> {
    return this.pPhoto;
  }

  set photo(value: Array<string>) {
    this.pPhoto = value;
  }
  public static fromJson(jsonObj: any): BuildObject{
    return new BuildObject(jsonObj.name, jsonObj.desc, jsonObj.photo);
  }
}
