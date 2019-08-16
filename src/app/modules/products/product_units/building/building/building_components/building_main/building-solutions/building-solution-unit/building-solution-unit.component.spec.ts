import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSolutionUnitComponent } from './building-solution-unit.component';

describe('BuildingSolutionUnitComponent', () => {
  let component: BuildingSolutionUnitComponent;
  let fixture: ComponentFixture<BuildingSolutionUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingSolutionUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingSolutionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
