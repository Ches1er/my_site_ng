import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByAddMenuUnitComponent } from './prod-by-add-menu-unit.component';

describe('ProdByAddMenuUnitComponent', () => {
  let component: ProdByAddMenuUnitComponent;
  let fixture: ComponentFixture<ProdByAddMenuUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdByAddMenuUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdByAddMenuUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
