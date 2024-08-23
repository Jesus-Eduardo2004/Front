import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupestoComponent } from './presupesto.component';

describe('PresupestoComponent', () => {
  let component: PresupestoComponent;
  let fixture: ComponentFixture<PresupestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresupestoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
