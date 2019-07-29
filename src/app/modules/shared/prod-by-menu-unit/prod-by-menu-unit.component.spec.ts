import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByMenuUnitComponent } from './prod-by-menu-unit.component';

describe('ProdByMenuUnitComponent', () => {
  let component: ProdByMenuUnitComponent;
  let fixture: ComponentFixture<ProdByMenuUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdByMenuUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdByMenuUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
