import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  
  transform(value: any,): any {
    if(value.length > 0){
     //console.log(value + "apllied "); 
     return value
     .split("")
     .reverse()
     .join("")
     
  }
return value;
    }
  }


