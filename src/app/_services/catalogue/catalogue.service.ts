import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})

export class CatalogueService {

  constructor(private http: HttpClient,) {}

  getAllCatalogue(): Observable<any> {
  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};
  

  
    return this.http.get(API_URL + 'listCatalogues', httpOptions);
  }
}
