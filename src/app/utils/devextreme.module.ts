import { NgModule } from '@angular/core';
import { DxButtonModule, DxDiagramModule, DxGanttModule } from 'devextreme-angular';



@NgModule({
  exports: [
    DxDiagramModule,
    DxGanttModule,
    DxButtonModule
  ]
})
export class DevextremeModule { }
