import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subroge } from 'src/app/models/subroge';

@Component({
  selector: 'app-subroge',
  templateUrl: './subroge.component.html',
  styleUrls: ['./subroge.component.scss']
})
export class SubrogeComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router) { }
  formAddSubroge: FormGroup;
  objectSubroge: Subroge;
   ngOnInit() {
    this.formAddSubroge = this.fb.group(
      { // Infos subrogé
        prenom: new FormControl(''),
        nom: new FormControl(''),
        dateNaiss: new FormControl(''),
        lieuNaiss: new FormControl(''),
        telephone: new FormControl(),
        cni: new FormControl(''),
        dateDCni: new FormControl(''),
        dateECni: new FormControl(''),
        domicile: new FormControl('')

      }
    );
  }
  // datas contrat
  onSubroge() {
    const SUBROGE = this.formAddSubroge.value;
    this.objectSubroge =SUBROGE ;
    // console.log(this.objectSubroge);
    this.localStorageAddData(this.objectSubroge);
  }
   //set iitem contrat in localStorage
  localStorageAddData(data){
    localStorage.setItem('currentSubroge', JSON.stringify(data));
    return this.router.navigate(['/app/addfacture']);
  }
  close(){
    return this.router.navigate(['/app/addclient']);
  }
}
