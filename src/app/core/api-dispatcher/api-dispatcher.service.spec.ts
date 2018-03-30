import { TestBed, inject } from '@angular/core/testing';

import { ApiDispatcherService } from './api-dispatcher.service';

describe('ApiDispatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiDispatcherService]
    });
  });

  it('should be created', inject([ApiDispatcherService], (service: ApiDispatcherService) => {
    expect(service).toBeTruthy();
  }));
});
