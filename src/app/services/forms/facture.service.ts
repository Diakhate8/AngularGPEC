import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private fb: FormBuilder,private httpClient: HttpClient) {}

  //formaulaire facture
  form = this.fb.group(
    {  
    $key: null,
    libele: new FormControl('', Validators.required),
    acompte: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    nbrEcheanciers: new FormControl('', Validators.required)
  });

  resetForm(){
    this.form.setValue(
      {  
      $key: null,
      libele: '',
      acompte: '',
      adresse: '',
      nbrEcheanciers:''   
    });
  }

  onFacture() {
    const FACTURE = this.form.value;
    return FACTURE ;
  }

  //formulaire recu
  recuForm = this.fb.group(
    {  
    $key: null,
    reference: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    montant: new FormControl('', Validators.required)
  });

  // post data recu
  setRecu() {
    const RECU= this.recuForm.value;
    return RECU;
  }
  //reset formRecu
  resetRecuForm(){
    this.form.setValue(
      {  
      $key: null,
      details: '',
      montant: '',
      reference: '',  
    });
  }
  // Service Ajout recu
  // enregistrement ,d'un nouveau contrat
  addRecu(data: any) {
    return this.httpClient.post<any>(`${environment.apiUrl}/api/addrecu`, data);
  }





}
