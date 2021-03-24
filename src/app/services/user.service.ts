import { UserSys } from './../models/user-sys';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Role } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = `${environment.apiUrl}/api/users`;
  private handleError: any;
  private headers: any;
  constructor(private httpClient: HttpClient) { }
  // Recuperation des roles dans BD
  getRoles() {
    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);
  }
  // enregistrement , user systeme
  register(data: any) {
    return this.httpClient.post<UserSys[]>(`${environment.apiUrl}/api/addusers`, data);
  }
  // recuperations des utulisateur dans BD
  getAllUser() {
    return this.httpClient.get(`${environment.apiUrl}/api/showusers`);
  }
  
  // recuperations et blocage des status d'utulisateurs
  getStatus(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/api/status/${id}`);
  }
  // // recuperations des status d'un partenaire
  // getStatusP(id: number) {
  //   return this.httpClient.get(`${environment.apiUrl}/api/partenairebloc/${id}.json`);
  // }

  // recuperations des status d'utulisateurs Partenaire
  getStatu(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/api/statusUP/${id}.json`);
  }

}
