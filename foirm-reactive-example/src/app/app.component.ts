import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormArray, ControlContainer } from '../../node_modules/@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris','Anna'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        'email'   : new FormControl(null, [Validators.required,Validators.email],this.forbiddenEmails)
      }),
      
      'gender'  : new FormControl('male'),
      'hobbies' : new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
      (value) =>{
        console.log(value);
      }
    )

    this.signupForm.statusChanges.subscribe(
      (status) =>{
        console.log(status);
      }
    )

    this.signupForm.setValue({
      'userData':{
        'username':'ramesh',
        'email':'vidhay@gmail.com',
      },
      'gender':'male',
      'hobbies':[]
    });
      
    this.signupForm.patchValue({
      'userData':{
        'username':'ram'
        
      }
      
    });
  
}


  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies'))
    .push(control);
  }
//synchronous validators
  forbiddenNames(control: FormControl):{[s: string]:boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {
        'nameisForbidden':true
      };
    }
    return null;
  }
//Async validators
  forbiddenEmails(control: FormControl): Promise<any> {
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailsForbidden':true});
        }else{
          resolve(null);
        }
      },2000)
     
    });
    return promise;
  }
    
   
  

}
