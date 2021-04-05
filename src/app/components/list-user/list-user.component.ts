import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  dataUser: any;
  
  constructor(private userServ: UserService) { }
  ngOnInit() {
    this.userServ.getAllUser().subscribe(data => {this.dataUser = data;
                                             //     console.log(this.dataUser);
    });
  }
  // changer Status user
  onStatus(id: number) {
    this.userServ.getStatus(id).subscribe(data => {
      alert(JSON.stringify(data));
      // tslint:disable-next-line:no-shadowed-variable
      this.userServ.getAllUser().subscribe(data => {this.dataUser = data;
        console.log(this.dataUser);
      });
    });
  }


}
