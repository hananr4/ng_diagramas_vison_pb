import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ArrayStore from 'devextreme/data/array_store';
import { Organigrama } from '../model/Organigrama';

@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.component.html',
  styles:[
    `
      #diagram {
        height: 900px;
      }

      .prueba{
        display:none;
      }
    `
  ]
})
export class OrganigramaComponent implements OnInit {

  organigramaDatasource: ArrayStore = new ArrayStore({
    key: 'id',
    data: [],
  });

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.queryParams
      .subscribe(params => {
        
        var organigrama: Organigrama[] = JSON.parse(params["organigrama"]);
        
        this.organigramaDatasource = new ArrayStore({
          key: 'id',
          data: organigrama,
        });

      });

  }
  getType(e:any){
    return "cardWithImageOnLeft";
  }
  getTextStyle(e:any){
    let style = { "font-size": "10px" };
     return style;
    
  }

}
