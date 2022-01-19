import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdopterService {

  constructor(private http: HttpClient) { }

  register(object: Object) {
    return this.http.post<any>(environment.apiRoute + `adopter/register`, object);
  }

  addComments(object: Object) {
    return this.http.post<any>(environment.apiRoute + `adopter/addComments`, object);
  } 

  getByDocument(docNumber: string){
    return this.http.get<any>(environment.apiRoute + `adopter/detail/${docNumber}`);
  }

  getCommentary(docNumber: string){
    return this.http.get<any>(environment.apiRoute + `adopter/comments/${docNumber}`);
  }

  list(){
    return this.http.get(environment.apiRoute + `adopter`);
  }

  search(AdopterOrganizationObject : Object){
    return this.http.post(environment.apiRoute + `adopter/detail`, AdopterOrganizationObject);
  }


  logicalDelete(idAdopter : number){
    return this.http.put(environment.apiRoute + `adopter/logicalDelete/${idAdopter}`,null);
  }

  delete(idAdopter : number){
    return this.http.delete(environment.apiRoute + `adopter/delete/${idAdopter}`);
  }

}
