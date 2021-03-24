import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  constructor(private httpClient: HttpClient) { }
  // Recherche transaction par code
  findOnVente(data: any) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/showonvente`, data);
  }   // Show All Ventes
   getVentes() {
    return this.httpClient.get<any>(`${environment.apiUrl}/api/showventes`);
  }
}
