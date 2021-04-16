import { MatTableDataSource } from '@angular/material';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TransformerDateService {

  datePipe = new DatePipe("en-US");

  constructor() { }

  transformer(date){
    return this.datePipe.transform(date, 'dd/MM/yyyy');

  }
}
