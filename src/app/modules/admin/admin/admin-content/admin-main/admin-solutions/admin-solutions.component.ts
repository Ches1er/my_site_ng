import {Component, OnInit} from '@angular/core';

import {AdminMessagesService} from '../../../../../../services/admin/admin-messages.service';
import {MessagesService} from '../../../../../../services/messages.service';

import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Image} from '../../../../../../dto/images/Image';
import {AngularEditorCfg} from '../../../../../../config/angularEditorCfg';
import {SolutionsService} from '../../../../../../services/http/solutions/solutions.service';
import {ProductsService} from '../../../../../../services/http/products/products.service';
import {Solution} from '../../../../../../dto/solutions/Solution';
import {Product} from '../../../../../../dto/products/Product';

@Component({
  selector: 'app-admin-solutions',
  templateUrl: './admin-solutions.component.html',
  styleUrls: ['./admin-solutions.component.less']
})
export class AdminSolutionsComponent implements OnInit {

  addChangeSolutionForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    imgId: new FormControl(''),
    products: new FormArray([]),
    items: new FormArray([]),
  });
  angularEditorCfg = new AngularEditorCfg();
  private pSolutions: Array<Solution> = [];
  private pProducts: Array<Product> = [];
  private pChoosenImg: Image = null;
  private pWhatHaveToDo: string;
  private pOnSubmitResponse: string;
  config = this.angularEditorCfg.CONFIG;

  constructor(private msgService: MessagesService,
              private solutionsService: SolutionsService,
              private adminMessageService: AdminMessagesService,
              private productsService: ProductsService) {
  }

  get solutions(): Array<Solution> {
    return this.pSolutions;
  }

  set solutions(value: Array<Solution>) {
    this.pSolutions = value;
  }

  get products(): Array<Product> {
    return this.pProducts;
  }

  set products(value: Array<Product>) {
    this.pProducts = value;
  }

  get choosenImg(): Image {
    return this.pChoosenImg;
  }

  set choosenImg(value: Image) {
    this.pChoosenImg = value;
  }

  get whatHaveToDo(): string {
    return this.pWhatHaveToDo;
  }

  set whatHaveToDo(value: string) {
    this.pWhatHaveToDo = value;
  }

  get onSubmitResponse() {
    return this.pOnSubmitResponse;
  }

  set onSubmitResponse(value) {
    this.pOnSubmitResponse = value;
  }

  ngOnInit() {
    this.choosenImg = null;
    this.whatHaveToDo = 'add';
    this.updateSolutions();
    this.productsService.allProducts().subscribe(products => this.products = products);
    this.adminMessageService.imageHasChoosen.subscribe(i => {
      this.moveImageToTheFormControl(i);
      this.choosenImg = i;
    });
    this.adminMessageService.newsCampaignAdded.subscribe(resp => {
      if (resp === 'update success') {
        this.onSubmitResponse = 'Данные успешно обновлены';
      }
      if (resp === 'insert success') {
        this.onSubmitResponse = 'Данные успешно добавлены';
      }
      if (resp === 'error') {
        this.onSubmitResponse = 'Ой, что-то пошло не так! Повторите попытку.';
      }
      if (resp === 'this solution exist') {
        this.onSubmitResponse = 'Готовое решение с таким названием уже существует. Вы можете изменить его, выбрав из списка слева.';
      }
      this.updateSolutions();
      console.log(this.solutions);
    });
  }

  private updateSolutions() {
    this.solutionsService.solutions.subscribe(solutions => this.solutions = solutions);
  }

  onSubmit() {
    this.solutionsService.addSolution(this.addChangeSolutionForm.value, this.whatHaveToDo).subscribe(resp => {
      this.adminMessageService.newsCampaignAddedMessage(resp);
    });
  }

  imagesPickerShow(e) {
    this.adminMessageService.imagesPickerWindowShow();
    e.preventDefault();
  }

  private moveImageToTheFormControl(image: Image) {
    this.addChangeSolutionForm.patchValue({
      img: image.id
    });
  }

  fillInSolution(solution: Solution) {
    this.addChangeSolutionForm.patchValue({
      id: solution.id,
      name: solution.name,
      desc: solution.desc,
      img: solution.imgId,
    });
    const products = solution.products.split(',');
    const items = solution.items.split(';');
    const formProducts = this.addChangeSolutionForm.controls.products as FormArray;
    const formItems = this.addChangeSolutionForm.controls.items as FormArray;
    formProducts.clear();
    formItems.clear();
    products.map(e => {
      formProducts.push(new FormControl(e, Validators.required));
    });
    items.map(e => {
      formItems.push(new FormControl(e, Validators.required));
    });
    this.choosenImg = new Image(solution.imgId, 'name', solution.img);
    this.onSubmitResponse = null;
    this.whatHaveToDo = 'update';
  }

  AddProduct(e) {
    (this.addChangeSolutionForm.controls.products as FormArray)
      .push(new FormControl('', Validators.required));
    e.preventDefault();
  }

  AddItem(e) {
    (this.addChangeSolutionForm.controls.items as FormArray)
      .push(new FormControl('', Validators.required));
    e.preventDefault();
  }
  DelProduct(i: any, e) {
    (this.addChangeSolutionForm.controls.products as FormArray)
      .removeAt(i);
    e.preventDefault();
  }
  DelItem(i: any, e) {
    (this.addChangeSolutionForm.controls.items as FormArray)
      .removeAt(i);
    e.preventDefault();
  }

  clearFields(e) {
    this.addChangeSolutionForm.patchValue({id: '', name: '', desc: '', img: ''});
    this.whatHaveToDo = 'add';
    this.choosenImg = null;
    e.preventDefault();
  }

}
