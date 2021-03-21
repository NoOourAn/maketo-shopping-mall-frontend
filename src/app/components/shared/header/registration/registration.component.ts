import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { JwtService } from '../../../../services/jwt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  userForm
  response
  errorMsg
  successMsg
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private jwtService:JwtService,private route:Router ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'),Validators.minLength(3),Validators.maxLength(30)]],
      password: ['',[Validators.required,Validators.minLength(7)]],
      gender: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      image: ['',[Validators.required]],

    });
}

uploadedFile
////i do it manually cuz ngModel doesn't work with input[type="file"]
/// so i have to create my own directive
fileChange(element) {
  if (element.target.files.length > 0)
    this.uploadedFile = element.target.files[0];
}

submit(){
  console.log(this.userForm)
  if(this.userForm.valid){
    console.log(this.userForm.value)
     this.jwtService.register(this.userForm.value,this.uploadedFile)
     .subscribe(res => {
        this.response=res
        if(this.response.success){
          this.userForm.reset()
          this.successMsg = this.response.message
        }else{
          this.errorMsg = this.response.message
        }

      
      })
  } else {
     alert('User form is not valid!!')
    console.log(this.userForm)
  }
}
}