import {Component, OnInit} from '@angular/core';
import {ShopsService} from '../shops.service';
import {element} from 'protractor';



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
  ShopsRemoved = [];
  constructor(private shopsservice: ShopsService) {
  }

  ngOnInit() {

    if (!localStorage.getItem('shops')) {

          this.shopsservice.getUserId().subscribe(data => {
          localStorage.setItem('currentUserId', JSON.stringify({id: data}));
          this.shopsservice.getShops().subscribe(data => {
            localStorage.setItem('shops', JSON.stringify({shops: data}));
            this.shops = JSON.parse(localStorage.getItem('shops'))['shops'];

            this.shopsservice.getLikedShops().subscribe(data => {
              if (this.likedShops == null) {
                localStorage.setItem('likedshops', JSON.stringify({likedshops: data}));
                this.likedShops = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];
                localStorage.setItem('localLikedShops', JSON.stringify({localLikedShops: this.localLikedShops}));
                this.shopsservice.getSortedDistances().subscribe(data => {
                  localStorage.setItem('sortedDistance', JSON.stringify({sortedDistance: data} ));
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

  afficheDistance(shop_id){
      for(let i = 0; i < this.sortedDistance.length; i++){
        if (shop_id === this.sortedDistance[i][0]){
          return this.sortedDistance[i][1];
        }
      }
    }
}
