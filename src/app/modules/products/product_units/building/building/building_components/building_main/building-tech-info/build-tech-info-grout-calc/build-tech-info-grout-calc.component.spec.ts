import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildTechInfoGroutCalcComponent } from './build-tech-info-grout-calc.component';

describe('BuildTechInfoGroutCalcComponent', () => {
  let component: BuildTechInfoGroutCalcComponent;
  let fixture: ComponentFixture<BuildTechInfoGroutCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildTechInfoGroutCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildTechInfoGroutCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
