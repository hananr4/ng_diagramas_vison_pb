import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DevextremeModule } from './utils/devextreme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { GanttComponent } from './gantt/gantt.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcesoComponent,
    OrganigramaComponent,
    GanttComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevextremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
