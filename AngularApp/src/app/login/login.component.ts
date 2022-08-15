import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
constructor(private router: Router){

}
  loginForm = new FormGroup({
    user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    password:new  FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)])
  })


  loginFormFun(){
    console.warn("loginFormFun() ==>"+this.loginForm.value)
    this.router.navigate(['/userlist'])
    }
   get user(){
    return this.loginForm.get('user')
   }
   get password(){
    return this.loginForm.get('password')
   }
  

}
