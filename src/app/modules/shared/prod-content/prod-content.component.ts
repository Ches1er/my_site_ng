import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from '../../../dto/products/Product';
import {ProductsService} from '../../../services/http/products/products.service';
import {MessagesService} from '../../../services/messages.service';

@Component({
  selector: 'app-prod-content',
  templateUrl: './prod-content.component.html',
  styleUrls: ['./prod-content.component.css']
})
export class ProdContentComponent implements OnInit {

  @Input() product: Product = null;
  constructor(@Inject(MessagesService) private msgService: MessagesService,
              @Inject(ProductsService) private prodService: ProductsService) { }

  ngOnInit() {
    this.msgService.changedCurrentProduct.subscribe(id => {
      this.prodService.product(id).subscribe(prod => this.product = prod);
    });
  }

}
