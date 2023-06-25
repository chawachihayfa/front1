import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../auth/storage.service';

const API_URL = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  getAllList(): Observable<any> {
  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};
  

  
    return this.http.get(API_URL + 'users', httpOptions);
  }
}
