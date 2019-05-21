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
  constructor(private shopsservice: ShopsService) {
  }

  ngOnInit() {
      if (!localStorage.getItem('shops')) {
      this.shopsservice.getShops().subscribe(data => {
      localStorage.setItem('shops', JSON.stringify({shops: data['result']}));
      this.shops = JSON.parse(localStorage.getItem('shops'))['shops'];
      this.shopsservice.getLikedShops().subscribe(data => {
          if (this.likedShops == null) {
            localStorage.setItem('likedshops', JSON.stringify({likedshops: data}));
            this.likedShops = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];
            localStorage.setItem('localLikedShops', JSON.stringify({localLikedShops: this.localLikedShops}));
          }
        }
      );
    });
      } else {this.shops = JSON.parse(localStorage.getItem('shops'))['shops'];
              this.likedShops = JSON.parse(localStorage.getItem('likedshops'))['likedshops'];

      }

  }

  likeShop(id) {
    this.likedShops.push(id);
    this.localLikedShops.push(id);
    localStorage.setItem('localLikedShops', JSON.stringify({localLikedShops: this.localLikedShops}));
    localStorage.setItem('likedshops', JSON.stringify({likedshops: this.likedShops}));

  }
}
