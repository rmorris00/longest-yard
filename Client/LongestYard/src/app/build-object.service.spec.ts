import { TestBed } from '@angular/core/testing';

import { BuildObjectService } from './build-object.service';

describe('BuildObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildObjectService = TestBed.get(BuildObjectService);
    expect(service).toBeTruthy();
  });
});
