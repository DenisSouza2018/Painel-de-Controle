import { Component, OnInit } from '@angular/core';
import { AddDados } from '../add';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  modelDados = new AddDados('','', false)

  ngOnInit() {

  }

  cadastro(){

    if(this.modelDados.mac !='' && this.modelDados.name !=''){
      this.modelDados.confirma=true;
      console.log(this.modelDados)
    }
    
  }

}
