import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackProdByAppContentComponent } from './pack-prod-by-app-content.component';

describe('PackProdByAppContentComponent', () => {
  let component: PackProdByAppContentComponent;
  let fixture: ComponentFixture<PackProdByAppContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackProdByAppContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackProdByAppContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
