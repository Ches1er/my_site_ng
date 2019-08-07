import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignContentUnitComponent } from './campaign-content-unit.component';

describe('CampaignContentUnitComponent', () => {
  let component: CampaignContentUnitComponent;
  let fixture: ComponentFixture<CampaignContentUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignContentUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignContentUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
