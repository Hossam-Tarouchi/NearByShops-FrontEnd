import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../shops.service';
import {UserService} from '../user.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = null;
  userEmail = null;
  userPassword = null;

  constructor(private userservice: UserService) {
  }

  ngOnInit() {
  }

  register() {
    this.userservice.register(this.username, this.userEmail, this.userPassword);
  }
}
