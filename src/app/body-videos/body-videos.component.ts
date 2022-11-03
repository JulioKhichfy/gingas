import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import * as $ from 'jquery';

@Component({
  selector: 'app-body-videos',
  templateUrl: './body-videos.component.html',
  styleUrls: ['./body-videos.component.css']
})
export class BodyVideosComponent implements OnInit {

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
   
  
    /*this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
      });*/

}
