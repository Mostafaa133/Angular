import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styles: [
  ]
})
export class UserTableComponent implements OnInit {
  Users:any;
  constructor(public myService:UserService){


  }
  ngOnInit(): void {
    this.myService.GetAllUsers().subscribe(
      {
        next:(data)=>{
          this.Users = data;
        },
        error:(err)=>{console.log(err)}
      }
    )
  }
  deleteUser(id: any) {
    if (confirm(`Are you Sure you want delete user number ${id}`)) {

      this.myService.deleteUser(id).subscribe(
        () => this.ngOnInit()
        ,
        (err) => console.log(err)
      );
    }
  }
}
