import { UserSys } from './../../models/user-sys';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  constructor(private userServ: UserService, private router: Router, private httpClient: HttpClient) { }
  formAddUser: FormGroup;
  roles: any;
  dataUser: any;

  ngOnInit() {
    this.reset();
  }
  // Reset
  reset() {
    this.roles = this.userServ.getRoles().subscribe(data => { this.roles = data; });
    // demarrage avec le formulaire
    this.formAddUser = new FormGroup(
      {
        username: new FormControl(''),
        password: new FormControl(''),
        prenom: new FormControl(''),
        nom: new FormControl(''),
        adresse: new FormControl(''),
        telephone: new FormControl(null, Validators.compose([
          Validators.pattern('^(78||77||76||70)+[0-9]{7}$'), Validators.required])
        ),
        email: new FormControl('', Validators.compose([
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        role: new FormControl(),
      }
    );
  }

  //  Recuperation des valeurs de l'utulisateur
  addUser() {
    //  console.log(this.formAddUser.value);
    const USERSYS: UserSys = {
      username: this.formAddUser.value.username,
      password: this.formAddUser.value.password,
      prenom: this.formAddUser.value.prenom,
      nom: this.formAddUser.value.nom,
      adresse: this.formAddUser.value.adresse,
      telephone: this.formAddUser.value.telephone,
      dateNaiss: this.formAddUser.value.dateNaiss,
      lieuNaiss: this.formAddUser.value.lieuNaiss,
      email: this.formAddUser.value.email,
      role: this.formAddUser.value.role,
      isActive: true
    };
    console.log(USERSYS);
    this.userServ.register(USERSYS).subscribe(data => {
      alert(' Utulisateur Creer avec succes');
      this.reset(); 
    },
      error => alert(JSON.stringify(error))
    );
  }



}

