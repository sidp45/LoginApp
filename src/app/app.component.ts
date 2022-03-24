import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginForm!: FormGroup;
  show:boolean =false
  password: any;

  constructor(private _route:Router) {}

  ngOnInit() {
    this._route.navigateByUrl('login')
  
  }

}
