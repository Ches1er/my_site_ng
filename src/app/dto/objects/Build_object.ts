export class BuildObject {

  constructor(private pName: string, private pDesc: string, private pImg: Array<string>, private pImgId: Array<string>) {
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

  get img(): Array<string> {
    return this.pImg;
  }

  set img(value: Array<string>) {
    this.pImg = value;
  }
  get imgId(): Array<string> {
    return this.pImgId;
  }

  set imgId(value: Array<string>) {
    this.pImgId = value;
  }

  public static fromJson(jsonObj: any): BuildObject{
    return new BuildObject(jsonObj.name, jsonObj.desc, jsonObj.img, jsonObj.img_id);
  }
}
