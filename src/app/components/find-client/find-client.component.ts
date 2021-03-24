import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-client',
  templateUrl: './find-client.component.html',
  styleUrls: ['./find-client.component.scss']
})
export class FindClientComponent implements OnInit {
  
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
  }




  
}
