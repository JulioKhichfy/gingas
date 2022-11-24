import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  public title:string='';
  public src:string='';

  ngOnInit(): void {
  }

  fecharModal(){
    $('#myiframe').removeAttr("src");
  }

  addSrc(target:string, src:string){
    this.title = target;
    this.src = src;
    $('#myiframe').attr("src",src);
  }

}
