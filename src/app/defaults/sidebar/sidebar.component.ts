import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {DecodeJwtTokenService} from '../../helpers/decode-jwt-token.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private user: User;
  private roles: string[];
  constructor(private jwtdecode: DecodeJwtTokenService) { }
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

  isAssistant() {
    if (this.roles[0] === 'ROLE_ASSISTANT' ) {return true; }
  }

}
