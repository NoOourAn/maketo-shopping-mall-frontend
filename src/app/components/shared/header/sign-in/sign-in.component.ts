import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JwtService } from '../../../../services/jwt.service';
import { AuthService } from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  token 
  response                   // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private fb: FormBuilder,         // {3}
    private authService: AuthService,
    private jwtService:JwtService,
    private route:Router
    // {4}
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid)
     {
      // this.authService.login(this.form.value); // {7}
      
      this.jwtService.login(this.form.value).subscribe((res => {
            this.response=res
            console.log(this.response.success);
            if(this.response.success){
             localStorage.setItem('access_token', this.response.token);
            if(this.response.user.username=="admin"){
              localStorage.setItem('admin',"true");
              this.authService.loginAsAdmin();  
            }else{
              if(localStorage.getItem('admin')){
                localStorage.removeItem("admin"); 
              }
            }

           this.authService.login();
             
           this.route.navigate(['/home']);
           window.location.reload();
            }else{
              console.log(this.response.message);
              alert(this.response.message)
            }
          
        }))
    }else{
      alert("this form isn't valid")
    }
    // this.formSubmitAttempt = true;             // {8}
  }


}
