import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { ProcesoComponent } from './proceso/proceso.component';

const routes: Routes = [
   {
    path: 'proceso',
    component: ProcesoComponent
  }, {
    path: 'organigrama',
    component: OrganigramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
