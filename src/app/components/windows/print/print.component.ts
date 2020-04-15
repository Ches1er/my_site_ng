import {Component, Inject, OnInit} from '@angular/core';
import {MessagesService} from '../../../services/messages.service';
import {OrderUnit} from '../../../modules/shared/order/OrderUnit';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.less']
})
export class PrintComponent implements OnInit {
  get sumOrderAmount(): number {
    return this.pSumOrderAmount;
  }

  set sumOrderAmount(value: number) {
    this.pSumOrderAmount = value;
  }
  get dateNow(): string {
    return this.pDateNow;
  }

  set dateNow(value: string) {
    this.pDateNow = value;
  }

  visible = false;
  private pPrintContent: Array<any> = null;
  private pPrintDefiner: string = null;
  private pDateNow: string = null;
  private pSumOrderAmount: number;

  constructor(@Inject(MessagesService) private msgService: MessagesService) {
  }

  get printContent(): Array<any> {
    return this.pPrintContent;
  }

  set printContent(value: Array<any>) {
    this.pPrintContent = value;
  }

  get printDefiner(): string {
    return this.pPrintDefiner;
  }

  set printDefiner(value: string) {
    this.pPrintDefiner = value;
  }

  ngOnInit() {
    this.msgService.printWindowShowMessage.subscribe(printData => {
      this.printDefiner = printData[0];
      this.getPrintContent(printData[1]);
      this.visible = true;
      const date = new Date();
      this.dateNow = date.toISOString().substr(0, 10);
    });
  }

  private getPrintContent(printData: string) {
    // Order
    if (this.printDefiner === 'order') {
      let orderUnitsStr: Array<string>;
      let orderUnits;
      let sumAmount = 0;
      orderUnitsStr = printData.split(';');
      orderUnits = orderUnitsStr.map(elem => {
          sumAmount = sumAmount + JSON.parse(elem).pAmount;
          return new OrderUnit(JSON.parse(elem).pBrandId,
            JSON.parse(elem).pBrand,
            JSON.parse(elem).pProductId,
            JSON.parse(elem).pProductName,
            JSON.parse(elem).pPrice,
            JSON.parse(elem).pQty,
            JSON.parse(elem).pAmount,
            JSON.parse(elem).pDiscount);
        }
      );
      this.printContent = orderUnits;
      this.sumOrderAmount = sumAmount;
    }
    // Smth else
  }

  public print() {
    window.print();
  }
  public exit() {
    this.visible = false;
  }
}
