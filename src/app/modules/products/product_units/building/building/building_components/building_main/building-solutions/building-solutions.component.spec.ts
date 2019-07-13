import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSolutionsComponent } from './building-solutions.component';

describe('BuildingSolutionsComponent', () => {
  let component: BuildingSolutionsComponent;
  let fixture: ComponentFixture<BuildingSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
