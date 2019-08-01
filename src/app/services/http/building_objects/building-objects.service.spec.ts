import { TestBed } from '@angular/core/testing';

import { BuildingObjectsService } from './building-objects.service';

describe('BuildingObjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildingObjectsService = TestBed.get(BuildingObjectsService);
    expect(service).toBeTruthy();
  });
});
