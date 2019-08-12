import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjClientsComponent } from './admin-obj-clients.component';

describe('AdminObjClientsComponent', () => {
  let component: AdminObjClientsComponent;
  let fixture: ComponentFixture<AdminObjClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
