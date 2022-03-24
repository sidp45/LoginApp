import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  show: boolean = false
  password: any;

  constructor(private LoginService: LoginService,
    private toastr: ToastrService,
    private _route: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.password = 'password';
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      check_box: ['', Validators.required]
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  //password hide and show Method
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  //Form Submit Method
  onSubmit() {
    if (this.loginForm.valid) {
      this.LoginService.saveLogin(this.loginForm.getRawValue()).subscribe((result: any) => {
        localStorage.setItem('result', JSON.stringify(result));
        this.LoginService.isUserActive();
        this.toastr.success('succesfully Login!');
        this._route.navigateByUrl('/userlist')
      }, error => {
        this.toastr.error('user not found!');
      });
    }
  }
}
