import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent {
  ID=0;
  constructor(myRoute:ActivatedRoute){
    console.log(myRoute.snapshot.params["id"]);
    this.ID = myRoute.snapshot.params["id"];
  }
}
