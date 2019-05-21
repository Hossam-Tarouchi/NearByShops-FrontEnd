import { Component, OnInit} from '@angular/core';
import {ShopsService} from '../shops.service';
import {ShopsComponent} from '../shops/shops.component';

@Component({
  selector: 'app-liked-shops',
  templateUrl: './liked-shops.component.html',
  styleUrls: ['./liked-shops.component.css']
})
export class LikedShopsComponent implements OnInit {
  shops = JSON.parse(localStorage.getItem('shops'))['shops'];
  likedShops = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];
  constructor() {

  }

  ngOnInit() {

  }

}
