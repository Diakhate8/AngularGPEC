import { Subroge } from 'src/app/models/subroge';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SubrogeService {

  objectClient: Subroge;

  constructor(private fb: FormBuilder) {}

  form = this.fb.group(
    {  
    $key: new FormControl(null),
    prenom: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    dateNaiss: new FormControl('', Validators.required),
    lieuNaiss: new FormControl('', Validators.required),
    cni: new FormControl('', Validators.required),
    dateDCni: new FormControl('', Validators.required),
    dateECni: new FormControl('', Validators.required),
    domicile: new FormControl('', Validators.required),
    adresse: new FormControl(''),
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
  onSubroge() {
  const SUBROGE = this.form.value;
  return SUBROGE ;
  // console.log(this.objectClient);
  // this.localStorageAddData(this.objectClient);
  }


}
