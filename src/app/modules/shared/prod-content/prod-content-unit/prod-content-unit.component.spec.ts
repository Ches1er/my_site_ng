import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdContentUnitComponent } from './prod-content-unit.component';

describe('ProdContentUnitComponent', () => {
  let component: ProdContentUnitComponent;
  let fixture: ComponentFixture<ProdContentUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdContentUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdContentUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
