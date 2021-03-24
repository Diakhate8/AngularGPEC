import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  formAddFacture: FormGroup;

  ngOnInit() {
    this.formAddFacture = this.fb.group(
      {
        libele: new FormControl(),
        acompte: new FormControl(),
        nbrEcheanciers: new FormControl()  
      }
    );
  }


  onFacture() {
    let facture= this.formAddFacture.value;
    this.localStorageAddData(facture);
  }

 //set iitem facture in localStorage
 localStorageAddData(data){
  localStorage.setItem('currentFacture', JSON.stringify(data));
  return this.router.navigate(['/app/addarticle']);    
}
}
