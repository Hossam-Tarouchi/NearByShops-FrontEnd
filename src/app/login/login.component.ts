import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loggedin: Observable<boolean>;


  constructor(private userservice: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.userservice.login(this.username, this.password);
  }


}
