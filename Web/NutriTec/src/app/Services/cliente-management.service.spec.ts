import { TestBed } from '@angular/core/testing';

import { ClienteManagementService } from './cliente-management.service';

describe('ClienteManagementService', () => {
  let service: ClienteManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
