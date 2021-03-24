import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { VenteService } from 'src/app/services/vente.service';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {

  listeVente: any;
  donnees = [];
  constructor(private venteServ: VenteService) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'date', 'numeroClient', 'client', 'articles', 'prenomR', 'nomR', 'telephoneR',
    'mode', 'solde', 'frais', 'commission'];
    
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    ngOnInit() {
      this.venteServ.getVentes().subscribe(data => {
        this.listeVente = data;
        console.log(this.listeVente);

        this.donnees.push(this.donnees);
        this.listeVente = data;
        // console.log(this.listeVente['createdAt']);

        this.listData = new MatTableDataSource(this.listeVente);
        this.listData.paginator = this.paginator;
      }, error => {
        console.log(error);
      });
    }
  
    applyFilter(filtervalue: string) {
      this.listData.filter = filtervalue.trim().toLocaleLowerCase();
    }
    // calcul total part agence
    getTotalcom() {
      return this.listeVente.map(t => t.partAgence).reduce((acc, value) => acc + value, 0);
    }
}
