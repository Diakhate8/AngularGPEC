import { ContratService } from 'src/app/services/contrat.service';
import { EcheancierService } from './../../services/forms/echeancier.service';
import { Facture } from './../../models/facture';
import { Subroge } from 'src/app/models/subroge';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/forms/client.service';
import { SubrogeService } from 'src/app/services/forms/subroge.service';
import { FactureService } from 'src/app/services/forms/facture.service';
import { ArticleService } from 'src/app/services/forms/article.service';
import { Contrat } from 'src/app/models/contrat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  
    isLinear = false;
    objectClient: Client;
    objectSubroge: Subroge;
    objectFacture: Facture;
    objectArticle: any;
    contrat: Contrat;
  

    constructor(private clientServ: ClientService, private subrogeServ: SubrogeService, 
      private factureServ : FactureService, private articleServ : ArticleService, 
      private echeancierServ: EcheancierService, private contratService: ContratService,
      private router: Router ) { }
    
    ngOnInit() {
    }
    //Ajout client

    
    onClient() {
      const CLIENT = this.clientServ.onClient();
      this.objectClient = CLIENT ;
      // console.log(this.objectClient)
      return this.objectClient;
    }
    // Ajout subroge
    onSubroge() {
      const SUBROGE = this.subrogeServ.onSubroge();
      this.objectSubroge = SUBROGE ;
      console.log(this.objectSubroge)
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
      localStorage.removeItem('currentArticle');
    }

    onEcheancier() {
      const MODALITE = this.echeancierServ.onEcheancier();

      this.contrat = {
        client: this.onClient(),
        echeanciers: MODALITE,
        facture: this.onFacture(),
        articles:this.onArticle(),
        subroge: this.onSubroge()
      };

      console.log(this.contrat);
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










    onReset() {
      this.clientServ.resetForm();
    }

    

   
    
}
