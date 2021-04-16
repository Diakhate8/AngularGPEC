import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TransformerDateService } from 'src/app/helpers/transformer-date.service';
import { Client } from 'src/app/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  objectClient: Client;
  private url = `${environment.apiUrl}/api/users`;
  private handleError: any;
  private headers: any;
  
  constructor(private fb: FormBuilder,private httpClient: HttpClient, 
    private transforDate: TransformerDateService) {}
  
  
    form = this.fb.group(
    {  
    $key: new FormControl(null),
    numero: new FormControl('', Validators.required),
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    dateNaiss: new FormControl('', Validators.required),
    lieuNaiss: new FormControl('', Validators.required),
    cni: new FormControl('', Validators.required),
    dateDCni: new FormControl('', Validators.required),
    dateECni: new FormControl('', Validators.required),
    domicile: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),   
  });

  resetForm(){
    this.form.setValue(
      {  
      $key: null,
      numero: '',
      prenom: '',
      nom: '',
      dateNaiss: '',
      lieuNaiss: '',
      cni: '',
      dateDCni: '',
      dateECni: '',
      domicile: '',
      adresse: '',
      telephone: '',   
    });
  }
 //donnes client 
  onClient() {
    const CLIENT =  {
      numero: this.form.value.numero,
      prenom: this.form.value.prenom,
      nom: this.form.value.nom,
      dateNaiss: this.transforDate.transformer(this.form.value.dateNaiss),
      lieuNaiss: this.form.value.lieuNaiss,
      cni: this.form.value.cni,
      dateDCni: this.transforDate.transformer(this.form.value.dateDCni),
      dateECni: this.transforDate.transformer(this.form.value.dateECni),
      domicile: this.form.value.domicile, 
      adresse: this.form.value.adresse,
      telephone: this.form.value.telephone
    }
    return CLIENT ;

  }
  
  // rechercher un client
  searchClient( data) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/showclient`, data );
  }










}

