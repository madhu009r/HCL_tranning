import { TestBed } from '@angular/core/testing';

import { Freshdesk } from './freshdesk';

describe('Freshdesk', () => {
  let service: Freshdesk;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Freshdesk);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
