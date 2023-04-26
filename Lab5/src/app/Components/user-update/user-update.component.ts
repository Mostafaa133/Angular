import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styles: [
  ]
})
export class UserUpdateComponent implements OnInit {
  isUpdated:boolean=false;
  ID:any;
  User:any;
  constructor(myRoute:ActivatedRoute,public myService: UserService){
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void{

    this.myService.GetUserByID(this.ID).subscribe(
      {
        next:(data)=>{
          this.User = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

  Add(name:any,age:any, email:any, phone:any){
    let newUser = {name, age, email, phone};
    this.myService.UpdateUser(this.ID,newUser).subscribe();
    this.isUpdated = true
  }
}
