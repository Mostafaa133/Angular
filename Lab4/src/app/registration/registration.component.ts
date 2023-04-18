import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent {
  validationForm = new FormGroup({
    name:new FormControl(null,Validators.minLength(3)),
    age:new FormControl(null,[Validators.min(20),Validators.max(40)]),
    email:new FormControl(null,Validators.email),

  })

  get AgeValid(){
    return this.validationForm.controls["age"].valid;
  }

  get nameValid(){
    return this.validationForm.controls["name"].valid;
  }
  get emailValid(){
    return this.validationForm.controls["email"].valid;
  }

  Add(){
    console.log("Form Value: ",this.validationForm.value);
    console.log("Form Valid: ",this.validationForm.valid);
    console.log("Name Value: ",this.validationForm.controls["name"].value);
    console.log("Name Valid: ",this.validationForm.controls["name"].valid);
    console.log("Age Value: ",this.validationForm.controls["age"].value);
    console.log("Age Valid: ",this.validationForm.controls["age"].valid);
    console.log("Age Error: ",this.validationForm.controls["age"].errors);
    console.log("-------------------------")
    if(this.validationForm.valid){
      //Logic ==> push ==> emit
    }
  }
}
