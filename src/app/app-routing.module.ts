import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresupestoComponent } from './components/presupesto/presupesto.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/presupuesto',
    pathMatch:'full'
  },
  {
    path: 'presupuesto',
    component: PresupestoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
