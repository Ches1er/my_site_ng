import {Component, Input, OnInit} from '@angular/core';
import {Brand} from '../../../../../../../../dto/Brand/Brand';
import {ApplyingGroup} from '../../../../../../../../dto/applying_groups/Applying_group';

@Component({
  selector: 'app-prod-by-brand-menu',
  templateUrl: './prod-by-brand-menu.component.html',
  styleUrls: ['./prod-by-brand-menu.component.css']
})
export class ProdByBrandMenuComponent implements OnInit {
  @Input() brands: Array<Brand> = [];
  constructor() { }

  ngOnInit() {
  }

}
