import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/AuthentificationService';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-form-conexion',
  templateUrl: './form-conexion.component.html',
  styleUrls: ['./form-conexion.component.scss']
})
export class FormConexionComponent implements OnInit {

  constructor(private auth: AuthentificationService, private router: Router ) { }
  // declaration var de ype formGroup contenant les donnees du formulaire
  formConexion: FormGroup ;
  hide = true;
  private isLoginError = false;
  public showSpinner = false;

  ngOnInit() {
    this.formConexion = new FormGroup(
      {
      username: new FormControl(''),
      password: new FormControl('')
      }
    );
  }
  onConexion() {
    this.loadSpinner();
    const user = {
      username: this.formConexion.value.username,
      password: this.formConexion.value.password
    };
    this.auth.getConnexion(user).subscribe(
      data => {
        console.log(data);
        if (user) {
          return this.router.navigate(['/app/service']);
        }
      },
      (error: HttpErrorResponse) => {
        this.isLoginError = true;
      }
    );
  }
  // loadSpiner
  loadSpinner() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false ;
      }, 5000);

  }



}
