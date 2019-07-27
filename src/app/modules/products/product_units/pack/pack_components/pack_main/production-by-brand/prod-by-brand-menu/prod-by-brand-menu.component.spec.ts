import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByBrandMenuComponent } from './prod-by-brand-menu.component';

describe('ProdByBrandMenuComponent', () => {
  let component: ProdByBrandMenuComponent;
  let fixture: ComponentFixture<ProdByBrandMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdByBrandMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdByBrandMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
