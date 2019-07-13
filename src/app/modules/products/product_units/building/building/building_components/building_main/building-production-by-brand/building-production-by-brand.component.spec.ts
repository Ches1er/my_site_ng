import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingProductionByBrandComponent } from './building-production-by-brand.component';

describe('BuildingProductionByBrandComponent', () => {
  let component: BuildingProductionByBrandComponent;
  let fixture: ComponentFixture<BuildingProductionByBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingProductionByBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingProductionByBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
