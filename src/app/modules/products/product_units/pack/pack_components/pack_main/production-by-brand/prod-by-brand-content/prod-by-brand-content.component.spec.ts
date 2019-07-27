import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByBrandContentComponent } from './prod-by-brand-content.component';

describe('ProdByBrandContentComponent', () => {
  let component: ProdByBrandContentComponent;
  let fixture: ComponentFixture<ProdByBrandContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdByBrandContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdByBrandContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
