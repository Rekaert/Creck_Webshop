import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { User } from './users/user';

@Injectable()
export class HttpLocalService {
  private url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    this.httpClient.get(this.url + '/user/')
      .subscribe((data) => console.log(data));
  }
  getOrders() {
    this.httpClient.get(this.url + '/order/all')
      .subscribe((data) => console.log(data));
  }
  getProducts() {
    this.httpClient.get(this.url + '/product')
      .subscribe((data) => console.log(data));
  }
  login() {
    this.httpClient.post(this.url + '/user/login', { username: "email@cim.com", password: "1234" })
      .subscribe((data) => console.log(data));
  }
  logout() {
    this.httpClient.get(this.url + '/user/login')
      .subscribe((data) => console.log(data));
  }
  /*
    delete(Userid): Observable<void> {
      console.log('Deleting ID: ' + Userid);
      return this.httpClient.delete<void>(this.url + Userid);
    }
  
    save(user: User): Observable<User> {
      if (user.id) {
        return this.httpClient.put<User>(this.url + user.id, user);
      } else {
        return this.httpClient.post<User>(this.url, user);
      }
    } */

}
