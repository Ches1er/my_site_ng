import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthButtonsBlockComponent } from './auth-buttons-block.component';

describe('AuthButtonsBlockComponent', () => {
  let component: AuthButtonsBlockComponent;
  let fixture: ComponentFixture<AuthButtonsBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthButtonsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthButtonsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
