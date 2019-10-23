import { TestBed } from '@angular/core/testing';

import { AppServices } from './app-services.service';

describe('AppServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppServices = TestBed.get(AppServices);
    expect(service).toBeTruthy();
  });
});
