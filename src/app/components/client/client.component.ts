import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router) { }
  formAddClient: FormGroup;
  objectClient: Client;
  ngOnInit() {
        // Infos client
    this.formAddClient = this.fb.group(
      {  
        hideRequired: false,
        floatLabel: 'auto',
        // Infos client
        numero: new FormControl('', Validators.required),
        prenom: new FormControl('', Validators.required),
        nom: new FormControl('', Validators.required),
        dateNaiss: new FormControl('', Validators.required),
        lieuNaiss: new FormControl('', Validators.required),
        cni: new FormControl('', Validators.required),
        dateDCni: new FormControl('', Validators.required),
        dateECni: new FormControl('', Validators.required),
        domicile: new FormControl('', Validators.required),
        adresse: new FormControl('', Validators.required),
        telephone: new FormControl('', Validators.required),        
      }
    );
  }
  // datas contrat
  onClient() {
    const CLIENT = this.formAddClient.value;
    this.objectClient = CLIENT ;
    // console.log(this.objectClient);
    this.localStorageAddData(this.objectClient);
  }

  //set iitem contrat in localStorage
  localStorageAddData(data){
    localStorage.setItem('currentClient', JSON.stringify(data));
    return this.router.navigate(['/app/addfacture']);
   
  }
  onAddSub(){
    const CLIENT = this.formAddClient.value;
    this.objectClient = CLIENT ;
    localStorage.setItem('currentClient', JSON.stringify(this.objectClient ));
    return this.router.navigate(['/app/addsubroge']); 
   }

}
