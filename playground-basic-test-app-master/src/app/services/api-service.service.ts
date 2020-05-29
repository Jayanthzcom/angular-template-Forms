import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of } from '../../../node_modules/rxjs';
import { Options } from '../../../node_modules/@types/selenium-webdriver/firefox';


@Injectable({
  providedIn: 'root'
})
export class ApiService {




  constructor(
    private httpClient: HttpClient
  ) { }

  getPatients() {
    return this.httpClient.get(environment.queryURI + '/Patient',
      { headers: this.getHeaders() });
   //  return of(environment.testData);
  }

  //http://hapi.fhir.org/baseR4/Patient/?given=Rosmarin&birthdate=gt1913-01-14T10:00
//http://hapi.fhir.org/baseR4/Patient/?given=Rosmarin&birthdate=gt1913-01-14T10:00

//http://hapi.fhir.org/baseR4/Patient/?given=Rosmarin
  getPatientsResources(name,date) {
   // let params = new HttpParams().set('logNamespace', name,'date');
   
    let param1 = new HttpParams()
      .set('given' , name)
      .set('birthdate' , "gt" + date + "T10:00")  

    return this.httpClient.get(environment.queryURI + '/Patient',
      {params:param1 }
      );
    //  return of(environment.testData);
  }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/fhir+json',
      'Access-Control-Allow-Origin': '*'
    });
    return headers;
  }
}


