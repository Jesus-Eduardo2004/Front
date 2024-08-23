import { Component, OnInit } from '@angular/core';
import { Presupuesto } from '../../models/Presupuesto';
import { PresupuestosService } from '../../services/presupuestos.service';

@Component({
  selector: 'app-presupesto',
  templateUrl: './presupesto.component.html',
  styleUrls: ['./presupesto.component.css']
})
export class PresupestoComponent implements OnInit {
  presupuesto: Presupuesto = {
    cantidad: '',
    fecha_Ini: '',
    fecha_Fin: ''
  };

  presupuestos: Presupuesto[] = [];
  editingPresupuestoId: string | null = null;

  constructor(private presupuestosService: PresupuestosService) {}

  ngOnInit(): void {
    this.getPresupuestos();
  }

  getPresupuestos(): void {
    this.presupuestosService.getPresupuestos().subscribe(
      (data) => {
        this.presupuestos = data;
      },
      (error) => {
        console.error('Error al obtener los presupuestos', error);
      }
    );
  }

  addPresupuesto(): void {
    if (this.editingPresupuestoId) {
      // Actualizar presupuesto
      this.presupuestosService.updatePresupuesto(this.editingPresupuestoId, this.presupuesto).subscribe(
        () => {
          this.getPresupuestos();
          this.resetPresupuesto();
        },
        (error) => {
          console.error('Error al actualizar el presupuesto', error);
        }
      );
    } else {
      // Agregar nuevo presupuesto
      this.presupuestosService.savePresupuestos(this.presupuesto).subscribe(
        () => {
          this.getPresupuestos();
          this.resetPresupuesto();
        },
        (error) => {
          console.error('Error al agregar el presupuesto', error);
        }
      );
    }
  }

  editPresupuesto(presupuesto: Presupuesto): void {
    this.presupuesto = { ...presupuesto };
    this.editingPresupuestoId = presupuesto.Id_Presupuesto ?? null;
  }

  deletePresupuesto(id: string): void {
    this.presupuestosService.deletePresupuesto(id).subscribe(
      () => {
        this.getPresupuestos(); // Actualiza la lista después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el presupuesto', error);
      }
    );
  }

  resetPresupuesto(): void {
    this.presupuesto = { cantidad: '', fecha_Ini: '', fecha_Fin: '' };
    this.editingPresupuestoId = null;
  }
}
