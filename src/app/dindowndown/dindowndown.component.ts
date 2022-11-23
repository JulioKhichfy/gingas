import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import * as $ from 'jquery';

@Component({
  selector: 'app-dindowndown',
  templateUrl: './dindowndown.component.html',
  styleUrls: ['./dindowndown.component.css']
})
export class DindowndownComponent implements OnInit {

  constructor(public _router: Router, public _location: Location) { }

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
