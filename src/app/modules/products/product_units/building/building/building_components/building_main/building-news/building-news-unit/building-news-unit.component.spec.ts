import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingNewsUnitComponent } from './building-news-unit.component';

describe('BuildingNewsUnitComponent', () => {
  let component: BuildingNewsUnitComponent;
  let fixture: ComponentFixture<BuildingNewsUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingNewsUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingNewsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
