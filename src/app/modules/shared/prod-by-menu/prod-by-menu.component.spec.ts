import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByMenuComponent } from './prod-by-menu.component';

describe('ProdByMenuComponent', () => {
  let component: ProdByMenuComponent;
  let fixture: ComponentFixture<ProdByMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdByMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdByMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
