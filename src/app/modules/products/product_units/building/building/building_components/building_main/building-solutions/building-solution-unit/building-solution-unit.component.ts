import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from '../../../../../../../../../services/messages.service';
import {Solution} from '../../../../../../../../../dto/solutions/Solution';
import {ProductsService} from '../../../../../../../../../services/http/products/products.service';
import {Product} from '../../../../../../../../../dto/products/Product';

@Component({
  selector: 'app-building-solution-unit',
  templateUrl: './building-solution-unit.component.html',
  styleUrls: ['./building-solution-unit.component.less']
})
export class BuildingSolutionUnitComponent implements OnInit {

  private pShowProductBlock: boolean = false;
  private pCurrentSolution: Solution = null;
  private pItems: Array<string> = [];
  private pProducts: Array<Product> = [];

  constructor(private msgService: MessagesService, private productsService: ProductsService) {
  }

  ngOnInit() {
    this.showProductBlock = false;
    this.msgService.changeCurrentSolution.subscribe(solution => {
      this.currentSolution = solution;
      const i = this.currentSolution.items;
      const p = this.currentSolution.products;
      this.items = i.split(';');
      this.fillInProducts(p.split(','));
      this.msgService.changeSolutionProductMessage(null);
    });
  }

  get currentSolution(): Solution {
    return this.pCurrentSolution;
  }

  set currentSolution(value: Solution) {
    this.pCurrentSolution = value;
  }

  get items(): any[] {
    return this.pItems;
  }

  set items(value: any[]) {
    this.pItems = value;
  }

  get products(): Array<Product> {
    return this.pProducts;
  }

  set products(value: Array<Product>) {
    this.pProducts = value;
  }

  get showProductBlock(): boolean {
    return this.pShowProductBlock;
  }

  set showProductBlock(value: boolean) {
    this.pShowProductBlock = value;
  }

  private fillInProducts(idArray: Array<string>) {
    this.products = [];
    idArray.forEach(e => {
      this.productsService.product(parseInt(e, 10)).subscribe(product => {
        this.products.push(product);
      });
    });
  }

  showProduct(product: Product) {
    this.showProductBlock = true;
    this.msgService.changeSolutionProductMessage(product);
  }
}
