export class News {

  constructor(private pId: number,
              private pName: string,
              private pShortNews: string,
              private pFullNews: string,
              private pImg: string,
              private pDate,
              private pSalesAreaId: number) {
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

  get shortNews(): string {
    return this.pShortNews;
  }

  set shortNews(value: string) {
    this.pShortNews = value;
  }

  get fullNews(): string {
    return this.pFullNews;
  }

  set fullNews(value: string) {
    this.pFullNews = value;
  }

  get img(): string {
    return this.pImg;
  }

  set img(value: string) {
    this.pImg = value;
  }

  get date() {
    return this.pDate;
  }

  set date(value) {
    this.pDate = value;
  }

  get salesAreaId(): number {
    return this.pSalesAreaId;
  }

  set salesAreaId(value: number) {
    this.pSalesAreaId = value;
  }

  public static fromJson(jsonObj: any): News {
    return new News(
      jsonObj.id,
      jsonObj.name,
      jsonObj.short_news,
      jsonObj.full_news,
      jsonObj.img,
      jsonObj.date,
      jsonObj.sales_area_id);

  }}
