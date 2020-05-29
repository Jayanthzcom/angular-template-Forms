import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';

import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    
    
  ],
  providers: [
    ApiService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
