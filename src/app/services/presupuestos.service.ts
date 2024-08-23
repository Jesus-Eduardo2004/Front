import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Presupuesto } from '../models/Presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  private API_URI = 'http://localhost:3000/api/presupuesto';

  constructor(private http: HttpClient) { }

  getPresupuestos(): Observable<Presupuesto[]> {
    return this.http.get<Presupuesto[]>(`${this.API_URI}`);
  }
  
    
  getPresupuesto(id: string): Observable<Presupuesto> {
    return this.http.get<Presupuesto>(`${this.API_URI}/${id}`);
  }

  savePresupuestos(presupuesto: Presupuesto): Observable<any> {
    return this.http.post<any>(`${this.API_URI}`, presupuesto);
  } 

  deletePresupuesto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URI}/${id}`);
  }

  updatePresupuesto(id: string, presupuesto: Presupuesto): Observable<any> {
    return this.http.put<any>(`${this.API_URI}/${id}`, presupuesto);
  }
}