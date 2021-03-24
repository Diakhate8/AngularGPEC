import { Contrat } from './../../models/contrat';
import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  contrat: Contrat;
  dataContrat: any;
  contratPdf: any;
  
  constructor(private contratService: ContratService,private router: Router) { }

  ngOnInit() {
  this.contratPdf = this.getContrat();
      console.log(this.contratPdf);
    
  }

  // get contrat in localStorage
  getContrat(){
    // get datas item contrat in localStorage
    const CONTRAT = localStorage.getItem('currentContrat');
      // parser item contrat in object json
      this.contrat = JSON.parse(CONTRAT);
      // console.log(this.contrat);
      return this.contrat;
  }




}
