import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesoComponent } from './proceso/proceso.component';
import { VerDiagramaComponent } from './ver-diagrama/ver-diagrama.component';

const routes: Routes = [
  {
    path: 'ver-diagrama',
    component: VerDiagramaComponent,

  }, {
    path: 'proceso',
    component: ProcesoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
