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
    this.calcDefiner = null;
    this.msgService.groutCalcShow.subscribe(definer => {
      this.calcDefiner = definer;
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
    this.groutCalc.patchValue({result}, {emitEvent: false});
  }

  private ker() {
    const result = this.getResult(1.5);
    this.groutCalc.patchValue({result}, {emitEvent: false});
  }

  private getResult(rate): string {
    const width = parseInt(this.groutCalc.get('width').value, 10);
    const height = parseInt(this.groutCalc.get('height').value, 10);
    const thickness = parseInt(this.groutCalc.get('thickness').value, 10);
    const seam = parseInt(this.groutCalc.get('seam').value, 10);
    const square = parseInt(this.groutCalc.get('square').value, 10);
    return (((width + height) / (width * height)) * thickness * seam * rate * square).toFixed(2);
  }

}
