import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {
  public emailEnviado="";
  constructor() { 
  }
  
  ngOnInit(): void {
  }

  copyPix(contribuicao:string){
    alert("Obrigado, a chave para o pix foi copiada :)" + contribuicao);
  }

  sendEmail(e:Event){
    e.preventDefault();
    emailjs.sendForm('ginga_email_service', 'template_vtayzpq', e.target as HTMLFormElement, '9r-WKIw9zpsv37hMC')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.emailEnviado = 'success';
      }, (error) => {
        this.emailEnviado = 'error';
        console.log(error.text);
      });
  
  }

}
