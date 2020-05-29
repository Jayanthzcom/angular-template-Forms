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
    allergy : '',
    gender : '',
    country: '',
    marital: '',
    email:'',
    subscription:'',
    password:'',
    smoke: '',
    drink: '',
    date:'',
  };
  submitted= false;
  
  defaultSubscription = 'advanced';
  defaultAllergy = 'No';
  defaultGender = 'Male';
  defaultMarital = 'Unmarried';
  defaultSmoke = 'No';
  defaultDrink = 'No';
  
 /*  onSubmit(form: NgForm){
    console.log(form);
  } */

  onSubmit(){
    console.log(this.signupForm);
    this.submitted = true;
    this.user.password = this.signupForm.value.userData.password;
    this.user.email = this.signupForm.value.userData.email;
    this.user.subscription = this.signupForm.value.userData.subscription;
    this.user.allergy = this.signupForm.value.userData.allergy;
    this.user.gender = this.signupForm.value.userData.gender;
    this.user.country = this.signupForm.value.userData.country;
    this.user.marital = this.signupForm.value.userData.marital;
    this.user.smoke = this.signupForm.value.userData.smoke;
    this.user.drink = this.signupForm.value.userData.drink;
    this.user.date = this.signupForm.value.userData.date; 
    
  }
}
