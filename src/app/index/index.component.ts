import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      this.route.navigate(['/shops']);
    }
  }

}
