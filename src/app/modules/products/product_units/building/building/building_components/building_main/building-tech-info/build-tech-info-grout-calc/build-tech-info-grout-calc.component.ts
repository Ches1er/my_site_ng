import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MessagesService} from '../../../../../../../../../services/messages.service';

@Component({
  selector: 'app-build-tech-info-grout-calc',
  templateUrl: './build-tech-info-grout-calc.component.html',
  styleUrls: ['./build-tech-info-grout-calc.component.less']
})
export class BuildTechInfoGroutCalcComponent implements OnInit {
  groutCalc: FormGroup = new FormGroup({
    height: new FormControl('', Validators.required),
    width: new FormControl('', Validators.required),
    thickness: new FormControl('', Validators.required),
    seam: new FormControl('', Validators.required),
    square: new FormControl('1', Validators.required),
    result: new FormControl('')
  });
  private pCalcDefiner = null;

  constructor(private msgService: MessagesService) {
  }

  ngOnInit() {
    this.calcDefiner = null
    this.msgService.groutCalcShow.subscribe(definer => {
      this.calcDefiner = definer;
      console.log(definer)
      this.groutCalc.reset();
    });
    this.onChanges();
  }

  onChanges() {

    this.groutCalc.valueChanges.subscribe(r => {
      console.log('changes');
      if (this.groutCalc.valid) {
        if (this.calcDefiner === 'Ultracolor' || this.calcDefiner === 'Kerapoxy') {
          this.ul_ep();
        }
        if (this.calcDefiner === 'Keracolor') {
          this.ker();
        }
      }
    });
  }

  get calcDefiner(): any {
    return this.pCalcDefiner;
  }

  set calcDefiner(value: any) {
    this.pCalcDefiner = value;
  }

  private ul_ep() {
    const result = this.getResult(1.6);
    this.groutCalc.patchValue({result: result}, {emitEvent: false});
  }

  private ker() {
    const result = this.getResult(1.5);
    this.groutCalc.patchValue({result: result}, {emitEvent: false});
  }

  private getResult(rate): number{
    const width = parseFloat(this.groutCalc.get('width').value);
    const height = parseFloat(this.groutCalc.get('height').value);
    const thickness = parseFloat(this.groutCalc.get('thickness').value);
    const seam = parseFloat(this.groutCalc.get('seam').value);
    const square = parseFloat(this.groutCalc.get('square').value);
    const result: number = ((width + height) / (width * height)) * thickness * seam * rate * square;
    return result;
  }

}
