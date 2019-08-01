import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsObjComponent } from './clients-obj.component';

describe('ClientsObjComponent', () => {
  let component: ClientsObjComponent;
  let fixture: ComponentFixture<ClientsObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
