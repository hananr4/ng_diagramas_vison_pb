import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DxDiagramComponent } from 'devextreme-angular';
import { Diagram } from './model';

@Component({
  selector: 'app-ver-diagrama',
  templateUrl: './ver-diagrama.component.html',
  styles: [
    `#diagram {
      height: 800px;
    }
    `
  ]
})
export class VerDiagramaComponent implements OnInit, AfterViewInit {
  @ViewChild(DxDiagramComponent, { static: false }) diagram?: DxDiagramComponent;

  json: string = '';
  constructor() {

  }
  ngAfterViewInit(): void {
    this.onConfig();
  }

  ngOnInit(): void {

  }
  onClick() {
    this.json = this.diagram?.instance.export() || '';
  }

  onConfig() {
    var item: Diagram = {
      connectors: [
        {
          key: "3",
          zIndex: 0,
          points: [{
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }],
          beginItemKey: "1",
          beginConnectionPointIndex: 1,
          endItemKey: "2",
          endConnectionPointIndex: 3
        }
      ],
      shapes: [
        {
          key: "1",
          type: "process",
          text: "Inicial",
          x: 0,
          y: 0,
          zIndex: 0
        },
        {
          key: "2",
          type: "process",
          text: "Inicial",
          x: 0,
          y: 0,
          zIndex: 0
        },
        {
          key: "4",
          type: "cardWithImageOnLeft",
          text: "Hanan Rodriguez\nDirector",
          x: 0,
          y: 0,

        },
      ]
    }
    this.diagram!.instance.import(JSON.stringify(item));
    this.diagram!.nodes.autoLayout = { type: "tree" };
    


    console.log('configurado');

  }

}
