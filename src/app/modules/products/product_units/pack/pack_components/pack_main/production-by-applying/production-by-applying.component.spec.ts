import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionByApplyingComponent } from './production-by-applying.component';

describe('ProductionByApplyingComponent', () => {
  let component: ProductionByApplyingComponent;
  let fixture: ComponentFixture<ProductionByApplyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionByApplyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionByApplyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
