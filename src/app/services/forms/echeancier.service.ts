import { TransformerDateService } from './../../helpers/transformer-date.service';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContratService } from '../contrat.service';


@Injectable({
  providedIn: 'root'
})

export class EcheancierService {

  restant: number;
  versement: number;
  
  constructor(private fb: FormBuilder, private contratService: ContratService
    ,private transforDate: TransformerDateService,
    private router: Router) { }

  form = this.fb.group(
    {  
    $key: new FormControl(null),  
    date1: new FormControl('', Validators.required), mont1: new FormControl('', Validators.required),
    date2: new FormControl(''), mont2: new FormControl(''),
    date3: new FormControl(''), mont3: new FormControl(''),
    date4: new FormControl(''), mont4: new FormControl(''),
    date5: new FormControl(''), mont5: new FormControl(''),
    date6: new FormControl(''), mont6: new FormControl(''),
    date7: new FormControl(''), mont7: new FormControl(''),
    date8: new FormControl(''), mont8: new FormControl(''),
    date9: new FormControl(''), mont9: new FormControl(''),
    date10: new FormControl(''), mont10: new FormControl(''),
    date11: new FormControl(''), mont11: new FormControl(''),
    date12: new FormControl(''), mont12: new FormControl('')
  });
 
  onEcheancier() {
    const MODALITE = {
      premierE: this.transforDate.transformer(this.form.value.date1), premierMont: this.form.value.mont1,
      deuxiemeE: this.transforDate.transformer(this.form.value.date2), deuxiemeMont: this.form.value.mont2,
      troisiemeE: this.transforDate.transformer(this.form.value.date3), troisiemeMont: this.form.value.mont3,
      quatriemeE: this.transforDate.transformer(this.form.value.date4), quatriemeMont: this.form.value.mont4,
      cinquiemeE: this.transforDate.transformer(this.form.value.date5), cinqiemeMont: this.form.value.mont5,
      sixiemeE: this.transforDate.transformer(this.form.value.date6), sixiemeMont: this.form.value.mont6,
      septiemeE: this.transforDate.transformer(this.form.value.date7), septiemeMont: this.form.value.mont7,
      huitiemeE: this.transforDate.transformer(this.form.value.date8), huitiemeMont: this.form.value.mont8,
      neuviemeE: this.transforDate.transformer(this.form.value.date9), neuviemeMont: this.form.value.mont9,
      dixiemeE: this.transforDate.transformer(this.form.value.date10), dixiemeMont: this.form.value.mont10,
      onziemeE: this.transforDate.transformer(this.form.value.date11), onziemeMont: this.form.value.mont11,
      douziemeE: this.transforDate.transformer(this.form.value.date12), douziemeMont: this.form.value.mont12
    };
    return MODALITE ;
  }

  resetForm(){
    this.form.setValue(
      {  
      $key: null,
      nbrEcheanciers: '',
      date1: '', mont1: '',
      date2: '', mont2: '',
      date3: '', mont3: '',
      date4: '', mont4: '',
      date5: '', mont5: '',
      date6: '', mont6: '',
      date7: '', mont7: '',
      date8: '', mont8: '',
      date9: '', mont9: '',
      date10: '', mont10: '',
      date11: '', mont11: '',
      date12: '', mont12: '',    
    });
  }



}
