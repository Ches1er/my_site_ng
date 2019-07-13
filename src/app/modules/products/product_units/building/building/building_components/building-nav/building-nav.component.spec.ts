import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingNavComponent } from './building-nav.component';

describe('BuildingNavComponent', () => {
  let component: BuildingNavComponent;
  let fixture: ComponentFixture<BuildingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
