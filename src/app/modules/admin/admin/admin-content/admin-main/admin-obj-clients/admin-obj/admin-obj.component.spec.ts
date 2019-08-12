import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjComponent } from './admin-obj.component';

describe('AdminObjComponent', () => {
  let component: AdminObjComponent;
  let fixture: ComponentFixture<AdminObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
