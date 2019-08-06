import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesPickerComponent } from './images-picker.component';

describe('ImagesPickerComponent', () => {
  let component: ImagesPickerComponent;
  let fixture: ComponentFixture<ImagesPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
