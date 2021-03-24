import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {User} from '../models/user';
import {Role} from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class DecodeJwtTokenService {
  private user: User;
  private roles: any;
  private decoded = jwt_decode(localStorage.getItem('currentUser'));

  constructor() { }
  // decode token
  public decode() {
     this.user = jwt_decode(localStorage.getItem('currentUser'));
     // console.log(this.user);
     return this.user ;
    }
  // get roles currentUser
  public getRoles() {
    this.roles = JSON.stringify(this.decoded.roles);
    return this.roles;
  }
}
