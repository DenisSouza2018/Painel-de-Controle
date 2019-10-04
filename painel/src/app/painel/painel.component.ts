import { Component, OnInit } from '@angular/core';
import { Painel } from '../painel';



@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor() { }

  modelPainel= new Painel('');

  ngOnInit() {
  }

  consulta(){
    console.log(this.modelPainel)
  }

}
