import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCampaignUnitComponent } from './building-campaign-unit.component';

describe('BuildingCampaignUnitComponent', () => {
  let component: BuildingCampaignUnitComponent;
  let fixture: ComponentFixture<BuildingCampaignUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingCampaignUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingCampaignUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
