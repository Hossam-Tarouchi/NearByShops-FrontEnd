import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  shops: any[];
  likedShops: number[];

  constructor(private Http: HttpClient) {
  }


  getShops(): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['token']});
    return this.Http.get<any[]>('http://localhost:8000/api/getUserSortedShops/' + JSON.parse(localStorage.getItem('currentUserId'))['id'], {headers});
  }

  getSortedDistances(): Observable<any> {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['token']});
    return this.Http.get<any[]>('http://localhost:8000/api/getSortedDistances/' + JSON.parse(localStorage.getItem('currentUserId'))['id'], {headers});
  }


  getUserId(): Observable {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['token']});
    return this.Http.get<any>('http://localhost:8000/api/getuserid/' + JSON.parse(localStorage.getItem('currentUser'))['username'], {headers});
  }

  getLikedShops() {
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['token']});
    return this.Http.get<any[]>('http://localhost:8000/api/likedshops/' + JSON.parse(localStorage.getItem('currentUserId'))['id'], {headers});
  }
}
