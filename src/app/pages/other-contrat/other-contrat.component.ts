import { ContratService } from './../../services/contrat.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-other-contrat',
  templateUrl: './other-contrat.component.html',
  styleUrls: ['./other-contrat.component.scss']
})
export class OtherContratComponent implements OnInit {

  formSearch: FormGroup;
  dataClient: Client;
  
  constructor(private fb: FormBuilder,private contratServ: ContratService, private router: Router) { }
  
  ngOnInit() {
    this.formSearch = this.fb.group(
      {  // Infos client
        numero: new FormControl('')
      }
    );
  }

  onSearch(){
    const CLIENT = {
      numero: this.formSearch.value.numero
    };
    this.contratServ.getClient(CLIENT).subscribe(
          data => {
            this.dataClient = data; console.log(this.dataClient);
          },
          error =>{
            alert('Pas de client trover pour ce numero')
          }
    );
    this.localStorageAddData(CLIENT);
  }

  //set iitem contrat in localStorage
  localStorageAddData(data){
    localStorage.setItem('currentClient', JSON.stringify(data));
    return this.router.navigate(['/app/addfacture']);
  }

}
