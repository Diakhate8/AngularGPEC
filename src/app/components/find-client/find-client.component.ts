import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-find-client',
  templateUrl: './find-client.component.html',
  styleUrls: ['./find-client.component.scss']
})
export class FindClientComponent implements OnInit {

  formSearch: FormGroup;
  objectClient: { numero: string };

  constructor(private fb: FormBuilder, private contratServ: ContratService, private router: Router) { }

  ngOnInit() {
    this.formSearch = this.fb.group(
      {  // Infos client
        numero: new FormControl('')
      }
    );
  }

  onSearch() {
    const CLIENT = {
      numero: this.formSearch.value.numero,
    };

    this.contratServ.getClient(CLIENT).subscribe(data => {
       console.log(data);
      // tslint:disable-next-line:no-shadowed-variable
    //  this.contratServ.getAllUser().subscribe(data => {
       // this.dataUser = data;
       // console.log(this.dataUser);
      });
   // });
    // console.log(CLIENT);
  }





}
