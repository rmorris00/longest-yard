import { TestBed } from '@angular/core/testing';

import { MobileDraftService } from './mobile-draft.service';

describe('MobileDraftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileDraftService = TestBed.get(MobileDraftService);
    expect(service).toBeTruthy();
  });
});
