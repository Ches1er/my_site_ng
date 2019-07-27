import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCampaignUnitComponent } from './pack-campaign-unit.component';

describe('PackCampaignUnitComponent', () => {
  let component: PackCampaignUnitComponent;
  let fixture: ComponentFixture<PackCampaignUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackCampaignUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackCampaignUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
