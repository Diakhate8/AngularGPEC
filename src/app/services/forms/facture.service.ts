import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FactureService {


  constructor(private fb: FormBuilder) {}

  form = this.fb.group(
    {  
    $key: null,
    libele: new FormControl('', Validators.required),
    acompte: new FormControl('', Validators.required),
    nbrEcheanciers: new FormControl('', Validators.required)
  });

  resetForm(){
    this.form.setValue(
      {  
      $key: null,
      libele: '',
      acompte: '',
      nbrEcheanciers:''   
    });
  }

  onFacture() {
    const FACTURE = this.form.value;
    return FACTURE ;
    }
}
