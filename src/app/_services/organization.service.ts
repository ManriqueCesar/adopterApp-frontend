import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(environment.apiRoute + `petOrganization`);
  }

  searchAdopter(object: object) {
    return this.http.get(environment.apiRoute + `petOrganization/search`, object);
  }

  findById(idOrganization: number){
    return this.http.get(environment.apiRoute + `petOrganization/${idOrganization}`);
  }

  search(adopterOrganizationObject : Object){
    return this.http.post(environment.apiRoute + `petOrganization/search`, adopterOrganizationObject)
  }

  listAdopters(idOrganization: number){
    return this.http.get<any>(environment.apiRoute + `petOrganization/adopter/${idOrganization}`);
  }

  edit(object: Object) {
    return this.http.put<any>(environment.apiRoute + `petOrganization/edit`, object);
  }
  
}
