import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import * as jwt_decode from 'jwt-decode';
import {DecodeJwtTokenService} from '../../helpers/decode-jwt-token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private jwtdecode: DecodeJwtTokenService, private router: Router) { }
  private user: User;
  private roles: string[];

  ngOnInit(): void {
    this.user = jwt_decode(localStorage.getItem('currentUser'));
    // console.log(this.user);
    // const decoded = jwt_decode(localStorage.getItem('currentUser'));
    // parser roles en tableau
    this.roles = JSON.parse(this.jwtdecode.getRoles());
    console.log(this.roles[0]);
  }
  isAdmin() {
    if (this.roles[0] === 'ROLE_ADMIN_SYSTEM' || this.roles[0] === 'ROLE_ADMIN' ) {return true; }
  }

  isCaissier() {
    if (this.roles[0] === 'ROLE_CAISSIER' ) {return true; }
  }
  isPartenaire() {
    if (this.roles[0] === 'ROLE_PARTENAIRE' || this.roles[0] === 'ROLE_ADMIN_PARTENAIRE' ) {return true; }
  }

  isCaissierP() {
    if (this.roles[0] === 'ROLE_CAISSIER_PARTENAIRE' ) {return true; }
  }






  logOut() {
    localStorage.removeItem('currentUser');
    return this.router.navigate(['/login']);
  }
}
