export class Solution {

  constructor(private pId: number,
              private pName: string,
              private pDesc: string,
              private pImg: string,
              private pImgId: number,
              private pProducts: string) {
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

  get imgId(): number {
    return this.pImgId;
  }

  set imgId(value: number) {
    this.pImgId = value;
  }

  get products(): string {
    return this.pProducts;
  }

  set products(value: string) {
    this.pProducts = value;
  }

  public static fromJson(jsonObj): Solution {
    return new Solution(jsonObj.id, jsonObj.name, jsonObj.desc, jsonObj.img, jsonObj.imgId, jsonObj.products);
  }
}
