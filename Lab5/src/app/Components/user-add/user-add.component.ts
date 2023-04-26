import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styles: [
  ]
})
export class UserAddComponent {
  isadded: boolean = false;
  constructor(private myService:UserService){  }

  Add(name:any,age:any, email:any, phone:any){
    let newUser = {name, age, email, phone};
    this.myService.AddNewUser(newUser).subscribe();
    this.isadded=true;
  }

}
