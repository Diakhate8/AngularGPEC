import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contrat } from 'src/app/models/contrat';
import { ContratService } from 'src/app/services/contrat.service';


interface Echeancier {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-echeancier',
  templateUrl: './echeancier.component.html',
  styleUrls: ['./echeancier.component.scss']
})
export class EcheancierComponent implements OnInit {

  //echeanciers
  echeanciers: Echeancier[] = [
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
    { value: 6, viewValue: '6' },
    { value: 7, viewValue: '7' },
    { value: 8, viewValue: '8' },
    { value: 9, viewValue: '9' },
    { value: 10, viewValue: '10' },
    { value: 11, viewValue: '11' },
    { value: 12, viewValue: '12' }
  ];
  public nbrEcheanciers: number;
  formAddModalite: FormGroup;
  restant: number;
  versement: number;
  contrat: Contrat;
  addOtherContrat: Contrat;

  constructor(private fb: FormBuilder, private contratService: ContratService,
    private router: Router) { }


  //fonction reset
  //fonction recuperetion des donnes et enregistrement da
  ngOnInit() {
    this.formAddModalite = this.fb.group(
      {
        //Modalite de paiement
        nbrEcheanciers: new FormControl(),
        date1: new FormControl(), mont1: new FormControl(),
        date2: new FormControl(), mont2: new FormControl(),
        date3: new FormControl(), mont3: new FormControl(),
        date4: new FormControl(), mont4: new FormControl(),
        date5: new FormControl(), mont5: new FormControl(),
        date6: new FormControl(), mont6: new FormControl(),
        date7: new FormControl(), mont7: new FormControl(),
        date8: new FormControl(), mont8: new FormControl(),
        date9: new FormControl(), mont9: new FormControl(),
        date10: new FormControl(), mont10: new FormControl(),
        date11: new FormControl(), mont11: new FormControl(),
        date12: new FormControl(), mont12: new FormControl(),
      }
    );
  }
 // datas echeances
  onEcheance() {
    //recuperation des echeanciers
    const MODALITE = {
      premierE: this.formAddModalite.value.date1, premierMont: this.formAddModalite.value.mont1,
      deuxiemeE: this.formAddModalite.value.date2, deuxiemeMont: this.formAddModalite.value.mont2,
      troisiemeE: this.formAddModalite.value.date3, troisiemeMont: this.formAddModalite.value.mont3,
      quatriemeE: this.formAddModalite.value.date4, quatriemeMont: this.formAddModalite.value.mont4,
      cinquiemeE: this.formAddModalite.value.date5, cinqiemeMont: this.formAddModalite.value.mont5,
      sixiemeE: this.formAddModalite.value.date6, sixiemeMont: this.formAddModalite.value.mont6,
      septiemeE: this.formAddModalite.value.date7, septiemeMont: this.formAddModalite.value.mont7,
      huitiemeE: this.formAddModalite.value.date8, huitiemeMont: this.formAddModalite.value.mont8,
      neuviemeE: this.formAddModalite.value.date9, neuviemeMont: this.formAddModalite.value.mont9,
      dixiemeE: this.formAddModalite.value.date10, dixiemeMont: this.formAddModalite.value.mont10,
      onziemeE: this.formAddModalite.value.date11, onziemeMont: this.formAddModalite.value.mont11,
      douziemeE: this.formAddModalite.value.date12, douziemeMont: this.formAddModalite.value.mont12
    };
    // ajout des echeancier dans localStorage
    this.localStorageAddData(MODALITE);
    //creation de la vente
    this.onContrat();
  }

  // Enregistrement contrat
  onContrat() {
    // rations de echeancier depuis lolocalStorage
    const CLI = localStorage.getItem('currentClient');
    const SUB = localStorage.getItem('currentSubroge');
    const FAC = localStorage.getItem('currentFacture');
    const ART = localStorage.getItem('currentArticle');
    const MOD = localStorage.getItem('currentModalite');

    // parser in object json
    var objC = JSON.parse(CLI);
    var objS = JSON.parse(SUB);
    var objF = JSON.parse(FAC);
    var objA = JSON.parse(ART);
    var objM = JSON.parse(MOD);
    //enregistrement  des donnes dans lobjet contrat
    this.contrat = {
      client: objC,
      echeanciers: objM,
      facture: objF,
      articles: objA,
      subroge: objS
    };
    // Enregistrement des la vente dans la BD
    this.contratService.addContrat(this.contrat).subscribe(data => {
      alert(' Vente enregistrée avec succé');
      //set iitem Contrat in localStorage
      localStorage.setItem('currentContrat', JSON.stringify(data));

      return this.router.navigate(['/app/contratpdf']);
    },
      error => alert(JSON.stringify(error))
    );
}

  

// other contrat
  // Enregistrement contrat
  otherContrat() {
    const MODAL = {
      premierE: this.formAddModalite.value.date1, premierMont: this.formAddModalite.value.mont1,
      deuxiemeE: this.formAddModalite.value.date2, deuxiemeMont: this.formAddModalite.value.mont2,
      troisiemeE: this.formAddModalite.value.date3, troisiemeMont: this.formAddModalite.value.mont3,
      quatriemeE: this.formAddModalite.value.date4, quatriemeMont: this.formAddModalite.value.mont4,
      cinquiemeE: this.formAddModalite.value.date5, cinqiemeMont: this.formAddModalite.value.mont5,
      sixiemeE: this.formAddModalite.value.date6, sixiemeMont: this.formAddModalite.value.mont6,
      septiemeE: this.formAddModalite.value.date7, septiemeMont: this.formAddModalite.value.mont7,
      huitiemeE: this.formAddModalite.value.date8, huitiemeMont: this.formAddModalite.value.mont8,
      neuviemeE: this.formAddModalite.value.date9, neuviemeMont: this.formAddModalite.value.mont9,
      dixiemeE: this.formAddModalite.value.date10, dixiemeMont: this.formAddModalite.value.mont10,
      onziemeE: this.formAddModalite.value.date11, onziemeMont: this.formAddModalite.value.mont11,
      douziemeE: this.formAddModalite.value.date12, douziemeMont: this.formAddModalite.value.mont12
    };
    this.localStorageAddData(MODAL);
    // get All datas contrat in localStorage
    const CLI = localStorage.getItem('currentClient');
    const SUB= localStorage.getItem('currentSubroge');
    const FAC = localStorage.getItem('currentFacture');
    const ART = localStorage.getItem('currentArticle');
    const MOD = localStorage.getItem('currentModalite');

    var objC = JSON.parse(CLI);
    // if(!SUB){objS=""};
    var objS = JSON.parse(SUB);
    var objF = JSON.parse(FAC);
    var objA = JSON.parse(ART);
    var objM = JSON.parse(MOD);

    this.addOtherContrat = {
      client: objC,
      facture: objF,
      articles: objA,
      echeanciers: objM,
      subroge: objS     
    };
    console.log(this.addOtherContrat);

    this.contratService.addOtherContrat(this.addOtherContrat).subscribe(data => {
      alert(' Vente enregistrée avec succé');
      //set iitem Contrat in localStorage
      localStorage.setItem('currentContrat', JSON.stringify(data));
      return this.router.navigate(['/app/contratpdf']);
    },
      error => console.log(error)
    );
  }

  //set iitem modalite in localStorage
  localStorageAddData(data) {
    localStorage.setItem('currentModalite', JSON.stringify(data));
  }

  page1(){
    return this.router.navigate(['/app/addcontrat']);
  }

}
