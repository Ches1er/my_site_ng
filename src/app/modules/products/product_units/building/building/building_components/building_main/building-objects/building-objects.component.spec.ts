import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingObjectsComponent } from './building-objects.component';

describe('BuildingObjectsComponent', () => {
  let component: BuildingObjectsComponent;
  let fixture: ComponentFixture<BuildingObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
