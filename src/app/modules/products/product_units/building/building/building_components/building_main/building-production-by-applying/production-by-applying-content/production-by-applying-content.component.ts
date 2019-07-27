import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../../../../../../dto/products/Product';

@Component({
  selector: 'app-production-by-applying-content',
  templateUrl: './production-by-applying-content.component.html',
  styleUrls: ['./production-by-applying-content.component.css']
})
export class ProductionByApplyingContentComponent implements OnInit {
  @Input() product: Product = null;
  constructor() { }

  ngOnInit() {
  }

}
