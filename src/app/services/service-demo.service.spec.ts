import { TestBed } from '@angular/core/testing';

import { ServiceDemoService } from './service-demo.service';

describe('ServiceDemoService', () => {
  let service: ServiceDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
