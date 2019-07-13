import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingTechInfoComponent } from './building-tech-info.component';

describe('BuildingTechInfoComponent', () => {
  let component: BuildingTechInfoComponent;
  let fixture: ComponentFixture<BuildingTechInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingTechInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingTechInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
