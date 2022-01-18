import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(environment.apiRoute + `document`);
  }

}
