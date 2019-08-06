import { TestBed } from '@angular/core/testing';

import { AdminMessagesService } from './admin-messages.service';

describe('AdminMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminMessagesService = TestBed.get(AdminMessagesService);
    expect(service).toBeTruthy();
  });
});
