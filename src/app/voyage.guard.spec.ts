import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { voyageGuard } from './voyage.guard';

describe('voyageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => voyageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
