import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pack-prod-by-app-content',
  templateUrl: './pack-prod-by-app-content.component.html',
  styleUrls: ['./pack-prod-by-app-content.component.css']
})
export class PackProdByAppContentComponent implements OnInit {
  @Input() product: any = null;
  constructor() { }

  ngOnInit() {
  }

}
