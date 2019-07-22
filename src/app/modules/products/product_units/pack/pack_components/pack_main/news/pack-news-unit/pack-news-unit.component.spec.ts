import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackNewsUnitComponent } from './pack-news-unit.component';

describe('PackNewsUnitComponent', () => {
  let component: PackNewsUnitComponent;
  let fixture: ComponentFixture<PackNewsUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackNewsUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackNewsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
