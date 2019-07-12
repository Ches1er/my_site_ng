import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackNavComponent } from './pack-nav.component';

describe('PackNavComponent', () => {
  let component: PackNavComponent;
  let fixture: ComponentFixture<PackNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
