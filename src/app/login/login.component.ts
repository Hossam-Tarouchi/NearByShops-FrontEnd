import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';


  constructor(private userservice: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.userservice.login(this.username, this.password);
  }


}
