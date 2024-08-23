import { TestBed } from '@angular/core/testing';

import { PresupuestoService } from './presupuestos.service';

describe('PresupuestosService', () => {
  let service: PresupuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresupuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
