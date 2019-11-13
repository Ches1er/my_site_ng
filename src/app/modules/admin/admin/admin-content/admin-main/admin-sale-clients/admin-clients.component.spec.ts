import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSaleClientsComponent } from './admin-sale-clients.component';

describe('AdminSaleClientsComponent', () => {
  let component: AdminSaleClientsComponent;
  let fixture: ComponentFixture<AdminSaleClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSaleClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSaleClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
