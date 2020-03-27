import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  livros = [
    {titulo: 'Anjos e demônios', 
    autor: 'Dan Brown', 
    descricao: 'Antes de decifrar O código Da Vinci, Robert Langdon, o famoso professor de simbologia de Harvard, vive sua primeira aventura em Anjos e demônios, quando tenta impedir que uma antiga sociedade secreta destrua a Cidade do Vaticano.', 
    categoria: 'mistério', 
    capa: 'https://images-na.ssl-images-amazon.com/images/I/51nBTppNXfL.jpg'},
    
    {titulo: 'O conto da Aia', 
    autor: 'Margaret Atwood', 
    descricao: 'O romance distópico O conto da aia, de Margaret Atwood, se passa num futuro muito próximo e tem como cenário uma república onde não existem mais jornais, revistas, livros nem filmes.', 
    categoria: 'ficção', 
    capa: 'https://images-na.ssl-images-amazon.com/images/I/51X40Du9otL._SX331_BO1,204,203,200_.jpg'},
    
    {titulo: 'O milagre da manhã', 
    autor: 'Hal Elrod', 
    descricao: 'Conheça o método simples e eficaz que vai proporcionar a vida dos sonhos ― antes das 8 horas da manhã! Hal Elrod explica os benefícios de acordar cedo e desenvolver todo o nosso potencial e as nossas habilidades.', 
    categoria: 'auto ajuda', 
    capa: 'https://images-na.ssl-images-amazon.com/images/I/41zcA8iynSL._SX309_BO1,204,203,200_.jpg'},

    {titulo: 'Quarto de despejo', 
    autor: 'Carolina Maria de Jesus', 
    descricao: 'O diário da catadora de papel Carolina Maria de Jesus deu origem à este livro, que relata o cotidiano triste e cruel da vida na favela.', 
    categoria: 'literatura e ficção', 
    capa: 'https://images-na.ssl-images-amazon.com/images/I/415zbkZK%2B5L._SX322_BO1,204,203,200_.jpg'},

    {titulo: 'Guadalupe', 
    autor: ' Angélica Freitas', 
    descricao: 'Às vésperas de completar trinta anos, tudo o que Guadalupe quer é esquecer seu trabalho no sebo de Minerva, seu tio travesti. É ela quem pilota um furgão velho pela Cidade do México, apanhando coleções de livros que Minerva arremata por poucos pesos de famílias enlutadas.', 
    categoria: 'HQ', 
    capa: 'https://images-na.ssl-images-amazon.com/images/I/51GWfuMRElL._SX350_BO1,204,203,200_.jpg'},

    {titulo: 'Terra sonâmbula', 
    autor: 'Mia Couto', 
    descricao: 'Um ônibus incendiado em uma estrada poeirenta serve de abrigo ao velho Tuahir e ao menino Muidinga, em fuga da guerra civil devastadora que grassa por toda parte em Moçambique.', 
    categoria: 'Literatura e Ficção', 
    capa: 'https://images-na.ssl-images-amazon.com/images/I/51tXeKZoh0L._SX332_BO1,204,203,200_.jpg'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
