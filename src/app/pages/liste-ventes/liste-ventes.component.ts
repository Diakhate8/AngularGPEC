import { VenteService } from './../../services/vente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-ventes',
  templateUrl: './liste-ventes.component.html',
  styleUrls: ['./liste-ventes.component.scss']
})
export class ListeVentesComponent implements OnInit {

  listeVente: any;
  donnees = [];
  
  constructor(private venteServ: VenteService) { }

  ngOnInit() {
    this.venteServ.getVentes().subscribe(data => {
      this.listeVente = data;
      console.log(this.listeVente);
    })
  }

  





}
