import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingOrderComponent } from './building-order.component';

describe('BuildingOrderComponent', () => {
  let component: BuildingOrderComponent;
  let fixture: ComponentFixture<BuildingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
