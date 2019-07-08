import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserBlockComponent } from './current-user-block.component';

describe('CurrentUserBlockComponent', () => {
  let component: CurrentUserBlockComponent;
  let fixture: ComponentFixture<CurrentUserBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentUserBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
