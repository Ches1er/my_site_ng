import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSaleProductComponent } from './admin-sale-product.component';

describe('AdminSaleProductComponent', () => {
  let component: AdminSaleProductComponent;
  let fixture: ComponentFixture<AdminSaleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSaleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
