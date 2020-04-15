import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductsService} from '../../../services/http/products/products.service';
import {HttpNewsService} from '../../../services/http/news/http-news.service';
import {SolutionsService} from '../../../services/http/solutions/solutions.service';
import {CampaignService} from '../../../services/http/campaign/campaign.service';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.less']
})
export class FindComponent implements OnInit {
  get findField(): HTMLElement {
    return this.pFindField;
  }

  get definer(): string {
    return this.pDefiner;
  }

  set definer(value: string) {
    this.pDefiner = value;
  }

  get notFoundMessage(): string {
    return this.pNotFoundMessage;
  }

  get whereToFindSubscriber(): string {
    return this.pWhereToFindSubscriber;
  }

  set whereToFindSubscriber(value: string) {
    this.pWhereToFindSubscriber = value;
  }

  constructor(public activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductsService,
              private newsService: HttpNewsService,
              private solutionsService: SolutionsService,
              private campaignsService: CampaignService) {
  }

  get findData(): string {
    return this.pFindData;
  }

  set findData(value: string) {
    this.pFindData = value;
  }

  get findedItems(): Array<any> {
    return this.pFindedProducts;
  }

  set findedItems(value: Array<any>) {
    this.pFindedProducts = value;
  }

  get error(): string {
    return this.pError;
  }

  set error(value: string) {
    this.pError = value;
  }

  private pFindData = '';
  // Input in header
  private pFindField = document.getElementById('findField');
  private pFindedProducts: Array<any> = null;
  private pWhereToFindSubscriber = '';
  private pError: string = null;
  private pNotFoundMessage = 'Запрошенная информация не найдена, попробуйте поменять запрос или категорию поиска';
  private pDefiner: string = null;
  findDefinerForm: FormGroup = new FormGroup({
    definer: new FormControl('')
  });

  private static getParam(param: any) {
    return {
      queryParams: {findData: param}
    };
  }

  ngOnInit() {
    this.findedItems = null;
    this.whereToFindSubscriber = '';
    this.activatedRoute.queryParams.subscribe(data => this.findData = data.findData);
  }

  onSubmit() {
    this.clearMessages();
    this.definer = this.findDefinerForm.controls.definer.value;
    switch (this.definer) {
      case 'production_by_brand':
        this.findInTechInfo();
        break;
      case 'solutions':
        this.findInSolutions();
        break;
      case 'news':
        this.findInNews();
        break;
      case 'campaign':
        this.findInCampaigns();
        break;
    }
  }

  // Methods to find in different categories

  private callFindError() {
    this.error = 'Вы искали ' + this.findData + '. ' + this.notFoundMessage;
    this.findField.focus();
    this.findField.setAttribute('style', 'border: 2px solid red');
  }

  private findInTechInfo() {
    this.whereToFindSubscriber = 'технических картах материалов';
    this.productService.findProducts(this.findData).subscribe(products => {
      this.findedItems = products;
      this.findField.setAttribute('style', 'border: 1px solid C0C0C0');
      if (products.length === 0) {
        this.callFindError();
      }
    });
  }

  private findInSolutions() {
    this.whereToFindSubscriber = 'готовых решениях';
    this.solutionsService.findSolutions(this.findData).subscribe(solutions => {
      this.findedItems = solutions;
      this.findField.setAttribute('style', 'border: 1px solid C0C0C0');
      if (solutions.length === 0) {
        this.callFindError();
      }
    });
  }

  private findInNews() {
    this.whereToFindSubscriber = 'новостях';
    this.newsService.findNews(this.findData).subscribe(news => {
      this.findedItems = news;
      this.findField.setAttribute('style', 'border: 1px solid C0C0C0');
      if (news.length === 0) {
        this.callFindError();
      }
    });
  }

  private findInCampaigns() {
    this.whereToFindSubscriber = 'акциях';
    this.campaignsService.findCampaigns(this.findData).subscribe(campaigns => {
      this.findedItems = campaigns;
      this.findField.setAttribute('style', 'border: 1px solid C0C0C0');
      if (campaigns.length === 0) {
        this.callFindError();
      }
    });
  }

  private clearMessages() {
    this.whereToFindSubscriber = null;
    this.error = null;
  }

  redirectToFullInfoPage(id: number, salesAreaId: number) {
    if (salesAreaId === 2) {
      this.router.navigate(['/main/building/' + this.definer], FindComponent.getParam(id));
    }
    if (salesAreaId === 1) {
      this.router.navigate(['/main/pack/' + this.definer], FindComponent.getParam(id));
    }
  }


}
