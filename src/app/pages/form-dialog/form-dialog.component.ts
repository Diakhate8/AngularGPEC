import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { ClientComponent } from 'src/app/components/client/client.component';
import { FormClientComponent } from 'src/app/components/form-client/form-client.component';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    
  }

 

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

  
    this.dialog.open(FormClientComponent, dialogConfig);
    
   // const dialogRef = this.dialog.open(FormClientComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe(
    //     data => console.log("Dialog output:", data)
    // );    
}



}
