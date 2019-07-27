import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionByApplyingMenuComponent } from './production-by-applying-menu.component';

describe('ProductionByApplyingMenuComponent', () => {
  let component: ProductionByApplyingMenuComponent;
  let fixture: ComponentFixture<ProductionByApplyingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionByApplyingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionByApplyingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
