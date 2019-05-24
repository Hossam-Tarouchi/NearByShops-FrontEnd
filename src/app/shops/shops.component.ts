import {Component, OnInit} from '@angular/core';
import {ShopsService} from '../shops.service';



@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],

})
export class ShopsComponent implements OnInit {
  shops;
  likedShops;
  localLikedShops = [];
  ShopsRemoved = [];
  sortedDistance = [];

  constructor(private shopsservice: ShopsService) {
  }

  ngOnInit() {

    if (!localStorage.getItem('shops')) {

          this.shopsservice.getUserId().subscribe(dataUserid => {
          localStorage.setItem('currentUserId', JSON.stringify({id: dataUserid}));
          this.shopsservice.getShops().subscribe(dataShops => {
            localStorage.setItem('shops', JSON.stringify({shops: dataShops}));
            this.shops = JSON.parse(localStorage.getItem('shops'))['shops'];

            this.shopsservice.getLikedShops().subscribe(dataLikedShops => {
              if (this.likedShops == null) {
                localStorage.setItem('likedshops', JSON.stringify({likedshops: dataLikedShops}));
                this.likedShops = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];
                localStorage.setItem('localLikedShops', JSON.stringify({localLikedShops: this.localLikedShops}));
                this.shopsservice.getSortedDistances().subscribe(dataSortedDistances => {
                  localStorage.setItem('sortedDistance', JSON.stringify({sortedDistance: dataSortedDistances} ));
                  this.sortedDistance = JSON.parse(localStorage.getItem('sortedDistance'))['sortedDistance'];
                  localStorage.setItem('ShopsRemoved', JSON.stringify({ShopsRemoved: this.ShopsRemoved}));
                });
              }
          });
        });


    });
    } else {
      this.shops = JSON.parse(localStorage.getItem('shops'))['shops'];
      this.likedShops = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];
      this.sortedDistance = JSON.parse(localStorage.getItem('sortedDistance'))['sortedDistance'];
    }

  }

  likeShop(id) {
    this.likedShops.push(id);
    this.localLikedShops.push(id);
    localStorage.setItem('localLikedShops', JSON.stringify({localLikedShops: this.localLikedShops}));
    localStorage.setItem('likedshops', JSON.stringify({likedshops: this.likedShops}));

  }

  afficheDistance(shopId) {
      for (let i = 0; i < this.sortedDistance.length; i++) {
        if (shopId === this.sortedDistance[i][0]) {
          return this.sortedDistance[i][1];
        }
      }
    }
}
