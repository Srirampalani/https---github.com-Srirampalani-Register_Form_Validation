import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
MiddleName: any;
repeatPass : string = 'none';
address: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    Middlename: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl("",   [Validators.required, Validators.pattern("[0-9]{10}.*")]),
    address: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15) ]),
    rpwd: new FormControl("", [Validators.required, ]),
    
  });

  registerSubmited(){
    // console.log(this.registerForm.get("firstname"));
 if (this.PWD.value == this.RPWD.value){
  console.log("Submited");
  
  console.log(this.registerForm.invalid);
  this.repeatPass = 'none'
  }
  else{(this.repeatPass='inline')
    }
  }
    get FirstName(): FormControl {
      return this.registerForm.get("firstname") as FormControl;
    }
    // get MiddleName(): FormControl {
    //   return this.registerForm.get("middlename") as FormControl;
    // }
    get LastName(): FormControl {
      return this.registerForm.get("lastname") as FormControl;
    }
    get Email(): FormControl {
      return this.registerForm.get("email") as FormControl;
    }
    get Mobile(): FormControl {
      return this.registerForm.get("mobile") as FormControl;
    }
    get Gender(): FormControl {
      return this.registerForm.get("gender") as FormControl;
    }
    get PWD(): FormControl {
      return this.registerForm.get("pwd") as FormControl;
    }
    get RPWD(): FormControl {
      return this.registerForm.get("rpwd") as FormControl;
    }
}


