import { Component,ViewChild } from '@angular/core';
import {NgForm}  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f',{static:true}) signupForm: NgForm;
  password='';
  
  user={
    
    email:'',
    subscription:'',
    password:''
  };
  submitted= false;
  
  defaultSubscription = 'advanced';
  
  
 /*  onSubmit(form: NgForm){
    console.log(form);
  } */

  onSubmit(){
    console.log(this.signupForm);
    this.submitted = true;
    this.user.password = this.signupForm.value.userData.password;
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.userData.subscription;
    
  }
}
