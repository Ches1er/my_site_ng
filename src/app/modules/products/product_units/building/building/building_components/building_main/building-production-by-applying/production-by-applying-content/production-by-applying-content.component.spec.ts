import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionByApplyingContentComponent } from './production-by-applying-content.component';

describe('ProductionByApplyingContentComponent', () => {
  let component: ProductionByApplyingContentComponent;
  let fixture: ComponentFixture<ProductionByApplyingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionByApplyingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionByApplyingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
