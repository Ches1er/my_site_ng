import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildProdByBrandContentComponent } from './build-prod-by-brand-content.component';

describe('BuildProdByBrandContentComponent', () => {
  let component: BuildProdByBrandContentComponent;
  let fixture: ComponentFixture<BuildProdByBrandContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildProdByBrandContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildProdByBrandContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
