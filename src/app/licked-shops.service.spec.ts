import { TestBed } from '@angular/core/testing';

import { LikedShopsService } from './liked-shops.service';

describe('LikedShopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikedShopsService = TestBed.get(LikedShopsService);
    expect(service).toBeTruthy();
  });
});
