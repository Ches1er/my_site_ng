export class ResultResponse {

  constructor(private pResponse: string) {
  }

  get response(): string {
    return this.pResponse;
  }

  set response(value: string) {
    this.pResponse = value;
  }

  public static fromJson(jsonObj: any): ResultResponse {
    return new ResultResponse(jsonObj.response);
  }
}
