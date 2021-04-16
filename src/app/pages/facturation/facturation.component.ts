import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/forms/facture.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.scss']
})
export class FacturationComponent implements OnInit {
  objectRecu: any;

  constructor(private factureServ :FactureService) { }

  ngOnInit() {
  }

  // Ajout Recu
  onRecu() {
    const RECU= this.factureServ.setRecu();
    this.objectRecu= RECU;
    console.log(this.objectRecu);
    this.factureServ.addRecu(RECU).subscribe(recu => {
      alert(' Recu enregistré avec succé');
      console.log(recu)
      localStorage.setItem('currentRecu', JSON.stringify(recu));
      // return this.router.navigate(['/app/contratpdf']);
    },
      error => console.log(error)
    );
  }






}
