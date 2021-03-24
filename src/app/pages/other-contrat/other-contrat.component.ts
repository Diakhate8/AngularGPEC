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
  objectClient: {numClient: string, cni: string };
  
  constructor(private fb: FormBuilder, private router: Router) { }
  
  ngOnInit() {
    this.formSearch = this.fb.group(
      {  // Infos client
        numero: new FormControl(''),
        nin: new FormControl('')
      }
    );
  }

  onSearch(){
    const CLIENT = {
      numero: this.formSearch.value.numero,
      cni: this.formSearch.value.nin
    };
    console.log(CLIENT ) ;
    this.localStorageAddData(CLIENT);
  }

  //set iitem contrat in localStorage
  localStorageAddData(data){
    localStorage.setItem('currentClient', JSON.stringify(data));
    return this.router.navigate(['/app/addfacture']);
  }

}
