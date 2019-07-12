import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionByBrandComponent } from './production-by-brand.component';

describe('ProductionByBrandComponent', () => {
  let component: ProductionByBrandComponent;
  let fixture: ComponentFixture<ProductionByBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionByBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
