import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prod-by-brand-content',
  templateUrl: './prod-by-brand-content.component.html',
  styleUrls: ['./prod-by-brand-content.component.css']
})
export class ProdByBrandContentComponent implements OnInit {
  @Input() product = null;
  constructor() { }

  ngOnInit() {
  }

}
