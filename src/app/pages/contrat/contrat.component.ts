import { Contrat } from './../../models/contrat';
import { Component, OnInit } from '@angular/core';
import { ContratService } from 'src/app/services/contrat.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
import { Client } from 'src/app/models/client';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.scss']
})
export class ContratComponent implements OnInit {

  contrat: Contrat;
  dataContrat: any;
  contratPdf: any;
  myDate = new Date();
  client: Client;
  currentDate: Date;
  factures: any;
  articles: any;
  

  constructor(private contratService: ContratService,private router: Router) { }

  ngOnInit() {
    this.contratPdf = this.getContrat();

      this.factures = this.contratPdf.factures
        console.log(this.factures);

      this.client = this.contratPdf.client;

      const ART = localStorage.getItem('currentArticle');
      this.articles= JSON.parse(ART);
        // console.log(this.articles);             
      this.currentDate = this.myDate ;

  }

  // get contrat in localStorage
  getContrat() {
    // get datas item contrat in localStorage
    const CONTRAT = localStorage.getItem('currentContrat');
    // parser item contrat in object json
    this.contrat = JSON.parse(CONTRAT);
    // console.log(this.contrat);
    return this.contrat;
  }

  //Contrat PDF
  generateContrat() {
    var element = document.getElementById('contrat');
    var opt = {
      margin: [0.8, 0.9, 1.2, 0.8],
      filename: 'CONTRAT.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
    // // Dawnload Attestation
    this.generateAttestation();
    // // Dawnload Facture
    this.generateFacture();
    // // Remove
    // this.removeVente();
  }
  // Attestation PDF
  generateAttestation() {
    var element1 = document.getElementById('attestation');
    var opt1 = {
      margin: [1, 0.9, 1, 0.8],
      filename: 'ATTESTATION CLIENT.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // New Promise-based usage:
    html2pdf().set(opt1).from(element1).save();
  }
  // Facture PDF
  generateFacture() {
    var element2 = document.getElementById('facture');
    var opt = {
      margin: [0.8, 0.8, 0.5, 0.5],
      filename: 'FACTURE CLIENT.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // New Promise-based usage:
    html2pdf().set(opt).from(element2).save();
  }

  // // Remove Vente in localStorage
  // removeVente() {
  //   localStorage.removeItem('currentClient');
  //   localStorage.removeItem('currentSubroge');
  //   localStorage.removeItem('currentArticle');
  //   localStorage.removeItem('currentFacture');
  //   localStorage.removeItem('currentContrat');
  //   return this.router.navigate(['/app/contratadd']);
  // }



}
