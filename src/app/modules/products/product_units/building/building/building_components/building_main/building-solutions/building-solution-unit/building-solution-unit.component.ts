import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from '../../../../../../../../../services/messages.service';
import {Solution} from '../../../../../../../../../dto/solutions/Solution';
import {ProductsService} from '../../../../../../../../../services/http/products/products.service';
import {Product} from '../../../../../../../../../dto/products/Product';

@Component({
  selector: 'app-building-solution-unit',
  templateUrl: './building-solution-unit.component.html',
  styleUrls: ['./building-solution-unit.component.css']
})
export class BuildingSolutionUnitComponent implements OnInit {

  private pShowProductBlock: boolean = false;
  currentSolution: Solution = null;
  private pProducts: Array<Product> = [];
  constructor(private msgService: MessagesService, private productsService: ProductsService) { }

  ngOnInit() {
    this.showProductBlock = false;
    this.msgService.changeCurrentSolution.subscribe(solution => {
      this.currentSolution = solution;
      this.fillInProducts(solution.products.split(','));
    } );
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
  private fillInProducts(idArray: Array<number>) {
    idArray.forEach(e => {
      this.productsService.product(e).subscribe(product => {
        this.products.push(product) ;
      });
    });
  }

  showProduct(product: Product) {
    this.showProductBlock = true;
    this.msgService.changeSolutionProductMessage(product);
  }
}
