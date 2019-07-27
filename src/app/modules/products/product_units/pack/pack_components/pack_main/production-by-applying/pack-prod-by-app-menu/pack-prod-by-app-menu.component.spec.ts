import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackProdByAppMenuComponent } from './pack-prod-by-app-menu.component';

describe('PackProdByAppMenuComponent', () => {
  let component: PackProdByAppMenuComponent;
  let fixture: ComponentFixture<PackProdByAppMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackProdByAppMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackProdByAppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
