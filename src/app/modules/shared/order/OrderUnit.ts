export class OrderUnit {

  constructor(private pBrandId: number,
              private pBrand: string,
              private pProductId: number,
              private pProductName: string,
              private pPrice: number,
              private pQty: number,
              private pAmount: number) {
  }

  get brandId(): number {
    return this.pBrandId;
  }

  set brandId(value: number) {
    this.pBrandId = value;
  }

  get brand(): string {
    return this.pBrand;
  }

  set brand(value: string) {
    this.pBrand = value;
  }

  get productId(): number {
    return this.pProductId;
  }

  set productId(value: number) {
    this.pProductId = value;
  }

  get productName(): string {
    return this.pProductName;
  }

  set productName(value: string) {
    this.pProductName = value;
  }

  get price(): number {
    return this.pPrice;
  }

  set price(value: number) {
    this.pPrice = value;
  }

  get qty(): number {
    return this.pQty;
  }

  set qty(value: number) {
    this.pQty = value;
  }

  get amount(): number {
    return this.pAmount;
  }

  set amount(value: number) {
    this.pAmount = value;
  }
}
