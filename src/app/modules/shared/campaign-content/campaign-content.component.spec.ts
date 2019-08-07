import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignContentComponent } from './campaign-content.component';

describe('CampaignContentComponent', () => {
  let component: CampaignContentComponent;
  let fixture: ComponentFixture<CampaignContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
