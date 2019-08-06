import { TestBed } from '@angular/core/testing';

import { SalesAreaService } from './sales-area.service';

describe('SalesAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesAreaService = TestBed.get(SalesAreaService);
    expect(service).toBeTruthy();
  });
});
