import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCampaignComponent } from './building-campaign.component';

describe('BuildingCampaignComponent', () => {
  let component: BuildingCampaignComponent;
  let fixture: ComponentFixture<BuildingCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
