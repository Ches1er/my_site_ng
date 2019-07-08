import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAuthBlockComponent } from './header-auth-block.component';

describe('HeaderAuthBlockComponent', () => {
  let component: HeaderAuthBlockComponent;
  let fixture: ComponentFixture<HeaderAuthBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAuthBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAuthBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
