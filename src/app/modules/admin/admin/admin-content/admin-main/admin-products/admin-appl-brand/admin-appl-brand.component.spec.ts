import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApplBrandComponent } from './admin-appl-brand.component';

describe('AdminApplBrandComponent', () => {
  let component: AdminApplBrandComponent;
  let fixture: ComponentFixture<AdminApplBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApplBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApplBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
