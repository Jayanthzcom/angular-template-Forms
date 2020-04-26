import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'form-reactive-comp';
  signupForm: FormGroup;
  //forbiddenprojname = "test";

  

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required]),
        'projectName'   : new FormControl(null, [Validators.required,this.forbiddenProjname.bind(this)],this.asyncForbiddenProjName)
      }),
      
      'projectStatus'  : new FormControl('Critical')
     
    });
  }

  forbiddenProjname(control: FormControl):{[s: string]:boolean}{
   if(control.value === 'Test'){
      return {
        'nameForbidden':true
      };
    }
    return null;
  }


  asyncForbiddenProjName(control: FormControl): Promise<any> {
    const promise = new Promise<any>((resolve, reject)=> {
      setTimeout(() => {
        if(control.value === 'Test1'){
          resolve({'nameForbidden':true});
        }else{
          resolve(null);
        }
      },2000)
     
    });
    return promise;
  }

  onSubmit(){
    console.log(this.signupForm);
  }


}
