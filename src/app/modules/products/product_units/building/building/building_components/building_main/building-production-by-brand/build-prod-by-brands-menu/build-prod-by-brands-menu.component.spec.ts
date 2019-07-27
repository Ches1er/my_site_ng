import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildProdByBrandsMenuComponent } from './build-prod-by-brands-menu.component';

describe('BuildProdByBrandsMenuComponent', () => {
  let component: BuildProdByBrandsMenuComponent;
  let fixture: ComponentFixture<BuildProdByBrandsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildProdByBrandsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildProdByBrandsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
