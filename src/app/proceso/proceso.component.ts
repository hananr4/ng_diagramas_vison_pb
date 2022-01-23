import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actividad } from '../model/Actividad';
import ArrayStore from 'devextreme/data/array_store';
import { Secuencia } from '../model/Secuencia';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styles: [
    `
      #diagram{
        height: 900px
      }
    `
  ]
})
export class ProcesoComponent implements OnInit {
  actividadesDatasource: ArrayStore = new ArrayStore({
    key: 'id',
    data: [],
  });

  secuencialesDatasource: ArrayStore = new ArrayStore({
    key: 'id',
    data: [],
  });

  constructor(
    private router: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.router.queryParams
      .subscribe(params => {
        this.actividadesDatasource = new ArrayStore({
          key: 'id',
          data: JSON.parse(params["actividades"]),
        });

        var i: number = 0;
        var secuenciales: Secuencia[] = JSON.parse(params["secuenciales"]);
        secuenciales.forEach(s => {
          s.id = (i++).toString();
        });
        this.secuencialesDatasource = new ArrayStore({
          key: 'id',
          data: secuenciales,
        });

      });
  }

  getType(p: Actividad): string {
    console.log(p.tipo);
    switch (p.tipo) {
      case 'Fin':
      case 'Inicio':
        return 'terminator';
        break;
      case 'Condicion':
        return 'decision';
        break;
      case 'Manual':
        return 'manualInput';
        break;
      case 'ProcesoPredefinido':
        return 'predefinedProcess';
        break;
      case 'Documento':
        return 'document';
        break;
      default:
        return 'process';
        break;
    }


  }

}
