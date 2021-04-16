import { ContratService } from './../../services/contrat.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { FactureService } from 'src/app/services/forms/facture.service';
import { ArticleService } from 'src/app/services/forms/article.service';
import { ClientService } from 'src/app/services/forms/client.service';
import { EcheancierService } from 'src/app/services/forms/echeancier.service';
import { SubrogeService } from 'src/app/services/forms/subroge.service';
import { Subroge } from 'src/app/models/subroge';
import { Facture } from 'src/app/models/facture';
import { Contrat } from 'src/app/models/contrat';


@Component({
  selector: 'app-other-contrat',
  templateUrl: './other-contrat.component.html',
  styleUrls: ['./other-contrat.component.scss']
})
export class OtherContratComponent implements OnInit {

  formSearch: FormGroup;
  dataClient: any;
  objectClient: {numero: string};
  objectSubroge: Subroge;
  objectFacture: Facture;
  objectArticle: any;
  addOtherContrat: Contrat;
  
  constructor(private clientServ: ClientService, private subrogeServ: SubrogeService, 
    private factureServ :FactureService, private articleServ : ArticleService, 
    private echeancierServ: EcheancierService,private contratServ: ContratService,
    private router: Router) { }
  
  ngOnInit() { 
  }
  //rechercher client
  search(){
    const CLIENT = {
      numero: this.clientServ.form.value.numero
    };
    // console.log(CLIENT)
    this.contratServ.getClient(CLIENT).subscribe(
          res => {
           this.dataClient = res; 
          },
          error =>{
            alert('Pas de client trover pour ce numero')
          }
    );
    return CLIENT
  }
  //Ajout client
  onClient(){
    const CLIENT = {
      numero: this.clientServ.form.value.numero
    };
    this.objectClient = CLIENT; return this.objectClient 
  }
 // Ajout subroge
  onSubroge() {
    const SUBROGE = this.subrogeServ.onSubroge();
    this.objectSubroge = SUBROGE ;
    return this.objectSubroge;
  }
  // Ajout Facture
  onFacture() {
    const Facture = this.factureServ.onFacture();
    this.objectFacture = Facture ;
    return this.objectFacture;
  }
  //ajout des oject articles {}
  articles() {
    this.objectArticle = this.articleServ.onAddArticle();
  }
  //validation des articles [{}]
  onArticle() {
    const ARTICLE = this.articleServ.getArticle();
    localStorage.setItem('currentArticle', JSON.stringify(ARTICLE));
    return ARTICLE;
  }
  resetArticle(){
    this.articleServ.onReset();
  }
  // validation et enregistement du contrata
  onEcheancier() {
    const MODALITE = this.echeancierServ.onEcheancier();
    // Object contrat
    this.addOtherContrat = {
      client: this.onClient(),
      echeanciers: MODALITE,
      facture: this.onFacture(),
      articles:this.onArticle(),
      subroge: this.onSubroge()
    };

    console.log(this.addOtherContrat);

    this.contratServ.addOtherContrat(this.addOtherContrat).subscribe(data => {
      alert(' Vente enregistrée avec succé');
      //set iitem Contrat in localStorage
      localStorage.setItem('currentContrat', JSON.stringify(data));
      return this.router.navigate(['/app/contratpdf']);
    },
      error => console.log(error)
    );
  }






}

  // yourApiCall() {
    // .pipe(map(res => res))
    // .subscribe(
    //     response => {
    //       this.clientServ.form.value.prenom.setValue(response.prenom);
    //     }
  //   this.http.get('http://localhost:8000/v1/passenger/2/getPassenger')
  //       .map(res => res.json())
  //       .subscribe(
  //           response => {
  //               this.myformService.formGroup.controls.name.setValue(response.name);
  //           });
    
  //   }