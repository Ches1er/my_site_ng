import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBranchesComponent } from './admin-branches.component';

describe('AdminBranchesComponent', () => {
  let component: AdminBranchesComponent;
  let fixture: ComponentFixture<AdminBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
