import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFindComponent } from './header-find.component';

describe('HeaderFindComponent', () => {
  let component: HeaderFindComponent;
  let fixture: ComponentFixture<HeaderFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
