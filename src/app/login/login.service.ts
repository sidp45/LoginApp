import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http: HttpClient,private _route:Router) {
   let token =localStorage.getItem('result');
   }
     token =localStorage.getItem('result');
  
  saveLogin(data:any){
    return this._http.post('https://reqres.in/api/login',data)
  }
  isUserActive(){
    let timer;
    if(!timer){
      timer = setTimeout(() => {
        this.logoutUser();
      },300000);
    }
    else if(timer){
    clearTimeout(timer);
    timer = setTimeout(() => { 
     this.logoutUser();   
    },300000);
    }
  }
  getUserList(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+this.token,
        'Content-type':'application/json'
      })
    };
    return this._http.get('https://reqres.in/api/unknown',httpOptions)
  }
  logoutUser(){
    localStorage.clear();
    this._route.navigateByUrl('login')
  }
}
