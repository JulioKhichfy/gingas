import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  
  constructor(private http: HttpClient) { }

  /*sendMessage(body:any){
    let headers = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.post("http://localhost:3000/email", body, headers);
  }*/
  
}
