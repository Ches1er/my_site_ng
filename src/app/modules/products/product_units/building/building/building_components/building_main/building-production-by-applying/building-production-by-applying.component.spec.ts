import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingProductionByApplyingComponent } from './building-production-by-applying.component';

describe('BuildingProductionByApplyingComponent', () => {
  let component: BuildingProductionByApplyingComponent;
  let fixture: ComponentFixture<BuildingProductionByApplyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingProductionByApplyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingProductionByApplyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
