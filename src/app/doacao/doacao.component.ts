import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copyPix(contribuicao:string){
    alert("Obrigado, a chave para o pix foi copiada :)" + contribuicao);
  }
}
