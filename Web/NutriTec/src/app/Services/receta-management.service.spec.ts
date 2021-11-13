import { TestBed } from '@angular/core/testing';

import { RecetaManagementService } from './receta-management.service';

describe('RecetaManagementService', () => {
  let service: RecetaManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
