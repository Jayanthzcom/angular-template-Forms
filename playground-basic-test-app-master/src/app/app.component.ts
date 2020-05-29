import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../app/services/api-service.service';
import {MatSort} from '@angular/material/sort';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'fhir-app-test';
  dataSource: any; 
  currentTime: Date;
  isLoading: String = 'N';
  
  @ViewChild('name') nameInputRef: ElementRef;
  @ViewChild('date') dateInputRef: ElementRef;
  @ViewChild(MatSort, {static: true}) sort : MatSort;



  constructor(
    private apiService: ApiService
  ) { }

 // dataSource = new MatTableDataSource(products);
 
  ngOnInit() {
    this.apiService.getPatients().subscribe(
      data => {
        console.log(data);
        this.currentTime = new Date();
        this.dataSource = data['entry'].filter(data => {
          
          if(data.resource.birthDate){
            console.log(data.resource.birthDate)
            let year = new Date(data.resource.birthDate).getFullYear();
            console.log(year);
               return year >= 1900 && year <= 1965 
          }
        }).sort((a,b) => new Date(a.resource.birthDate).getFullYear() - new Date(b.resource.birthDate).getFullYear());
          
            
     
     }
    )

  }

  displayedColumns: string[] = ['id','name', 'birthDate', 'gender'];

  searchClick(){
    console.log(  this.nameInputRef.nativeElement.value  + " " + this.dateInputRef.nativeElement.value);
    
    
    if(!(/^[a-zA-Z]+$/.test(this.nameInputRef.nativeElement.value)))
    {
      alert('not accepted');
     // this.isLoading = 'N'
    }
    else{

      this.isLoading = 'Y';

      setTimeout(() => {
        this.apiService.getPatientsResources(this.nameInputRef.nativeElement.value, this.dateInputRef.nativeElement.value)
        .subscribe( data => {this.isLoading = 'N'; this.dataSource = data['entry']})
      },5000)

    }
    
    
    
      
      
    }
      
  
  formatName(nameObj){
    let name = '';
 
    name =  nameObj[0].given[0] + " " + nameObj[0].family ;
   
    return name;
    
  }
  



}


