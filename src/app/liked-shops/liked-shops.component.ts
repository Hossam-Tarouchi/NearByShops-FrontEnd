import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-liked-shops',
  templateUrl: './liked-shops.component.html',
  styleUrls: ['./liked-shops.component.css']
})
export class LikedShopsComponent implements OnInit {
  shops = JSON.parse(localStorage.getItem('shops'))['shops'];
  likedShops = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];
  ShopsRemoved = [];
  sortedDistance = JSON.parse(localStorage.getItem('sortedDistance'))['sortedDistance'];
  localArrayStay = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];;
  constructor() {
  }

  ngOnInit() {
    if(!JSON.parse(localStorage.getItem('ShopsRemoved'))) {
      localStorage.setItem('ShopsRemoved', JSON.stringify({ShopsRemoved: this.ShopsRemoved}));
    } else {

    }
  }

  dislikeShop(idShop) {
    this.localArrayStay = [];
    for (const id of this.likedShops) {
      if (id === idShop && !this.ShopsRemoved.includes(id)) {
        this.ShopsRemoved.push(id);
      }
    }
    for (const id of this.likedShops){

      if(!this.ShopsRemoved.includes(id) && !this.localArrayStay.includes(id)) {
        this.localArrayStay.push(id);
      }
    }
    localStorage.setItem('ShopsRemoved', JSON.stringify({ShopsRemoved: this.ShopsRemoved}));
    localStorage.setItem('likedshops', JSON.stringify({likedshops: this.localArrayStay}));
  }

  afficheDistance(shopId){
    for (let i = 0; i < this.sortedDistance.length; i++) {
      if (shopId === this.sortedDistance[i][0]) {
        return this.sortedDistance[i][1];
      }
    }
  }
}
