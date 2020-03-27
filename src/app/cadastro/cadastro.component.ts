import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  // Declaração das propriedades
  campoTitulo;
  campoAutor;
  campoDescricao;
  campoCategoria;
  campoCapa;

  constructor() { }
  // tudo que é do componente é this
  ngOnInit() {
  
  }

  cadastrar (){
    console.log(this.campoTitulo);
    console.log(this.campoAutor);
    console.log(this.campoDescricao);
    console.log(this.campoCategoria);
    console.log(this.campoCapa);
    }

}
