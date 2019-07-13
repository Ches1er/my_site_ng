import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingNewsComponent } from './building-news.component';

describe('BuildingNewsComponent', () => {
  let component: BuildingNewsComponent;
  let fixture: ComponentFixture<BuildingNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
