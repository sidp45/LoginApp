import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userData:any =[];

  constructor(private loginservice:LoginService ) { }

  ngOnInit(): void {
    this.getUserList();
  }

  //get UserList Method
  getUserList() {
    this.loginservice.getUserList().subscribe((result: any) => {
      this.userData = result.data;
      this.loginservice.isUserActive();
    });
  }
}


