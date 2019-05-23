import { Component, OnInit} from '@angular/core';
import {ShopsService} from '../shops.service';
import {ShopsComponent} from '../shops/shops.component';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-liked-shops',
  templateUrl: './liked-shops.component.html',
  styleUrls: ['./liked-shops.component.css']
})
export class LikedShopsComponent implements OnInit {
  shops = JSON.parse(localStorage.getItem('shops'))['shops'];
  likedShops = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];
  ShopsRemoved = [];
  sortedDistance = this.sortedDistance = JSON.parse(localStorage.getItem('sortedDistance'))['sortedDistance'];
  localArrayStay = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];;
  constructor() {
  }

  ngOnInit() {
    if(!JSON.parse(localStorage.getItem('ShopsRemoved'))){
      localStorage.setItem('ShopsRemoved', JSON.stringify({ShopsRemoved: this.ShopsRemoved}));
    } else {

    }
  }

  dislikeShop(id_shop) {
    this.localArrayStay = [];
    for (let id of this.likedShops) {
      if (id === id_shop && !this.ShopsRemoved.includes(id)) {
        this.ShopsRemoved.push(id);
      }
    }
    for (let id of this.likedShops){

      if(!this.ShopsRemoved.includes(id) && !this.localArrayStay.includes(id)) {
        this.localArrayStay.push(id);
      }
    }
    console.log('-------------- In component ---------------');

    localStorage.setItem('ShopsRemoved', JSON.stringify({ShopsRemoved: this.ShopsRemoved}));
    localStorage.setItem('likedshops', JSON.stringify({likedshops: this.localArrayStay}));
    console.log(JSON.parse(localStorage.getItem('ShopsRemoved'))['ShopsRemoved']);

  }

  afficheDistance(shop_id){
    for(let i = 0; i < this.sortedDistance.length; i++){
      if (shop_id === this.sortedDistance[i][0]){
        return this.sortedDistance[i][1];
      }
    }
  }
}
