export class BuildObject {

  constructor(private pId: number,
              private pName: string,
              private pDesc: string,
              private pImg: string,
              private pImgId: string) {
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

  get desc(): string {
    return this.pDesc;
  }

  set desc(value: string) {
    this.pDesc = value;
  }

  get img(): string {
    return this.pImg;
  }

  set img(value: string) {
    this.pImg = value;
  }

  get imgId(): string {
    return this.pImgId;
  }

  set imgId(value: string) {
    this.pImgId = value;
  }

  public static fromJson(jsonObj: any): BuildObject {
    return new BuildObject(jsonObj.id, jsonObj.name, jsonObj.desc, jsonObj.img, jsonObj.img_id);
  }
}
