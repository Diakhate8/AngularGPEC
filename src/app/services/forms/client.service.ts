import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  objectClient: Client;

  constructor(private fb: FormBuilder) {}

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
    adresse: new FormControl('', Validators.required),
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
 // datas contrat
  onClient() {
  const CLIENT = this.form.value;
  return CLIENT ;
  // console.log(this.objectClient);
  // this.localStorageAddData(this.objectClient);
  }



}

