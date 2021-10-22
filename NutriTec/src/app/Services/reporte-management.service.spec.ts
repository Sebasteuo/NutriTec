import { TestBed } from '@angular/core/testing';

import { ReporteManagementService } from './reporte-management.service';

describe('ReporteManagementService', () => {
  let service: ReporteManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
