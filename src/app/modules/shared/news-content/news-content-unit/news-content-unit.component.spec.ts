import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContentUnitComponent } from './news-content-unit.component';

describe('NewsContentUnitComponent', () => {
  let component: NewsContentUnitComponent;
  let fixture: ComponentFixture<NewsContentUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsContentUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsContentUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
