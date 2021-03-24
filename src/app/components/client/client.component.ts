import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
    this.formAddClient = this.fb.group(
      {  // Infos client
        numero: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        dateNaiss: new FormControl(''),
        lieuNaiss: new FormControl(''),
        cni: new FormControl(''),
        dateDCni: new FormControl(''),
        dateECni: new FormControl(''),
        domicile: new FormControl(''),
        adresse: new FormControl(''),
        telephone: new FormControl()        
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
    return this.router.navigate(['/app/addsubroge']);    
  }
   

}
