import { TestBed } from '@angular/core/testing';

import { HttpNewsService } from './http-news.service';

describe('HttpNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpNewsService = TestBed.get(HttpNewsService);
    expect(service).toBeTruthy();
  });
});
