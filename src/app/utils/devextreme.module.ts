import { NgModule } from '@angular/core';
import { DxButtonModule, DxDiagramModule } from 'devextreme-angular';



@NgModule({
  exports: [
    DxDiagramModule,
    DxButtonModule
  ]
})
export class DevextremeModule { }
