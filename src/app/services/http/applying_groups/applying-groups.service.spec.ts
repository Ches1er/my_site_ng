import { TestBed } from '@angular/core/testing';

import { ApplyingGroupsService } from './applying-groups.service';

describe('ApplyingGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplyingGroupsService = TestBed.get(ApplyingGroupsService);
    expect(service).toBeTruthy();
  });
});
