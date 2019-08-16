import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSolutionProductComponent } from './building-solution-product.component';

describe('BuildingSolutionProductComponent', () => {
  let component: BuildingSolutionProductComponent;
  let fixture: ComponentFixture<BuildingSolutionProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingSolutionProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingSolutionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
