import { Injectable } from '@angular/core';
import { UserSys } from '../models/user-sys';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjoutUserService {
  private url = `${environment.apiUrl}/api/users`;
  private handleError: any;
  private headers: any;
  constructor(private httpClient: HttpClient) { }

  // // Recuperation des roles dans BD
  // getRoles() {
  //   return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);
  // }

  // // enregistrement , user systeme
  // setUser(data: UserSys) {
  //   return this.httpClient.post<UserSys[]>(`${environment.apiUrl}/api/addusers`, data );
  // }
 
    // enregistrement , JSON.stringify(userSys)
      // setUser(user: UserSys) {
      //   return this.httpClient.post<UserSys[]>(`${environment.apiUrl}/api/users.json`, user );
      // }
    // recuperation des user de BD
   // getUsers() {
     // return this.httpClient.get(`${environment.apiUrl}/api/users.json`);
    // }

    // }
  // getUsers(): Observable<UserSys[]> {
    // return this.httpClient.get(`${environment.apiUrl}/api/users`,
      // new RequestOptions({ headers: this.headers })
    // ).map(res => res.json());
  // }


}
