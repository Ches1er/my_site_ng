import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackMainComponent } from './pack-main.component';

describe('PackMainComponent', () => {
  let component: PackMainComponent;
  let fixture: ComponentFixture<PackMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
