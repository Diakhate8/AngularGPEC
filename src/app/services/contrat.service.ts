import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private url = `${environment.apiUrl}/api/users`;
  private handleError: any;
  private headers: any;
  
  constructor(private httpClient: HttpClient) { }

  // enregistrement ,d'un nouveau contrat
  addContrat(data: any) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/addcontrat`, data);
  }

  // enregistrement de contrat pour un client existant deja
  addOtherContrat(data: any) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/contrat/other`, data);
  }
 
  // rechercher un client
  getClient(data: any) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/showclient`, data );
  }
}
