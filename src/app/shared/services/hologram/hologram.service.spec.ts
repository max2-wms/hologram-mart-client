import { TestBed } from '@angular/core/testing';

import { HologramService } from './hologram.service';

describe('HologramService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HologramService = TestBed.get(HologramService);
    expect(service).toBeTruthy();
  });
});
