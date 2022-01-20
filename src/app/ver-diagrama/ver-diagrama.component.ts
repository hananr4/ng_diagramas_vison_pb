import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDiagramComponent } from 'devextreme-angular';

@Component({
  selector: 'app-ver-diagrama',
  templateUrl: './ver-diagrama.component.html',
  styles: [
    `#diagram {
      height: 900px;
    }
    `
  ]
})
export class VerDiagramaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
