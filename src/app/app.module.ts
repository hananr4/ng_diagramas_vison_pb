import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DevextremeModule } from './utils/devextreme.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerDiagramaComponent } from './ver-diagrama/ver-diagrama.component';

@NgModule({
  declarations: [
    AppComponent,
    VerDiagramaComponent,
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
