import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  user_id;
  shops: any[];
  likedShops: number[];
  constructor(private Http: HttpClient) { }


  getShops():Observable<any> {
    this.getUserId();
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['token'] });
    return this.Http.get<any[]>('http://localhost:8000/api/shops', {headers});
  }


  getUserId() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['token'] });
    this.Http.get<String>('http://localhost:8000/api/getuserid/' + JSON.parse(localStorage.getItem('currentUser'))['username'] , {headers}).subscribe(data => {
      this.user_id = data;
      if (this.user_id) {
        localStorage.setItem('currentUserId', JSON.stringify({id: this.user_id}));
      }
    });
  }

  getLikedShops() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['token'] });
    return this.Http.get<any[]>('http://localhost:8000/api/likedshops/' + JSON.parse(localStorage.getItem('currentUserId'))['id'], {headers});
  }

}
