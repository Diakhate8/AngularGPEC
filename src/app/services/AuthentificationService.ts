import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private httpClient: HttpClient) {
    // recuperation et affectation du userConnecter dans localstorage
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }
    // recuperation des valeurs du user connecter
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  // tslint:disable-next-line: member-ordering
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  // isLoggedIn() {
  //   throw new Error('Method not implemented.');
  // }

  getConnexion(user: User) {
    console.log(environment.apiUrl);
    // tslint:disable-next-line: no-shadowed-variable
    return this.httpClient.post<User>(`${environment.apiUrl}/login_check`, user ).pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  }


// public isAthenticate(){
 //   const token=localStorage.getItem('currentUser');return !thisjwtHelperisTokenEpired(token);
// }



}
