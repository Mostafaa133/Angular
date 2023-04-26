import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  ID:any;
  User:any;
  constructor(myRoute:ActivatedRoute,public myService: UserService){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetUserByID(this.ID).subscribe(
      {
        next:(data)=>{
          //console.log(data);
          this.User = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
