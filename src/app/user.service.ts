import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public token: '';

  constructor(private http: HttpClient, private router: Router) { }

  register(username: string, userEmail: string, userPassword: string) {
    if (userEmail != null && userPassword != null) {
      const headers = new HttpHeaders();
      headers.append('content-type', 'application/x-www-form-urlencoded');
      this.http.post('http://127.0.0.1:8000/register_api', {
        username: username,
        activated: 1,
        email: userEmail,
        password: userPassword
      } , {headers}).subscribe(
        (data: any) => {
          if (data === 'succes') {
            this.login(username, userPassword);
          }
        }
      );
    }

  }





  login(username: string, password: string) {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    this.http.post('http://127.0.0.1:8000/api/login_check', {
      username: username,
      password: password
    } , {headers}).subscribe(
      (data => {
        this.token = data['token'];
        if (this.token) {
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: this.token}));
          this.router.navigate(['/shops']);

          return true;
        } else {return false; }
      })
    );

  }


  logout() {
    this.token = null;
    /*----------------*/
    if (JSON.parse(localStorage.getItem('localLikedShops'))['localLikedShops'] != null ) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('currentUser'))['token'] });
    this.http.post('http://127.0.0.1:8000/api/setuserlikedshops', {
      likedposts: JSON.parse(localStorage.getItem('localLikedShops'))['localLikedShops'],
      ShopsRemoved: JSON.parse(localStorage.getItem('ShopsRemoved'))['ShopsRemoved'],
      userid: JSON.parse(localStorage.getItem('currentUserId'))['id']
    } , {headers}).subscribe();
    }
    /*-----------------*/
    localStorage.removeItem('currentUser');
    localStorage.removeItem('shops');
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('likedshops');
    localStorage.removeItem('localLikedShops');
    localStorage.removeItem('ShopsRemoved');

    this.router.navigate(['/']);
  }
}
