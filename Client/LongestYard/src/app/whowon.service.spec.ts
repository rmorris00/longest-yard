import { TestBed } from '@angular/core/testing';

import { WhowonService } from './whowon.service';

describe('WhowonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhowonService = TestBed.get(WhowonService);
    expect(service).toBeTruthy();
  });
});
