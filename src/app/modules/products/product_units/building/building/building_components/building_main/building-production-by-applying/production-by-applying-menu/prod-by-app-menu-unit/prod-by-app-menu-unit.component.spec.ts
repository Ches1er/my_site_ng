import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByAppMenuUnitComponent } from './prod-by-app-menu-unit.component';

describe('ProdByAppMenuUnitComponent', () => {
  let component: ProdByAppMenuUnitComponent;
  let fixture: ComponentFixture<ProdByAppMenuUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdByAppMenuUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdByAppMenuUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
