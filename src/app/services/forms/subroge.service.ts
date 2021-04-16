import { Subroge } from 'src/app/models/subroge';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TransformerDateService } from 'src/app/helpers/transformer-date.service';

@Injectable({
  providedIn: 'root'
})
export class SubrogeService {

  objectClient: Subroge;

  constructor(private fb: FormBuilder,private transforDate: TransformerDateService) {}
  // formulaire denregistrement subroge
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
  //reset form
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
  // datas Subroge
  onSubroge() {
  const SUBROGE  =  {
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
  return SUBROGE ;
  // console.log(this.objectClient);
  // this.localStorageAddData(this.objectClient);
  }


}
