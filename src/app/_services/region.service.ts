import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) {}

  listDepartment() {
    return this.http.get(environment.apiRoute + `region/department`);
  }

  listDistrict(idProvince : number) {
    return this.http.get(environment.apiRoute + `region/district/${idProvince}`);
  }

  listProvince(idDepartment: number) {
    return this.http.get(environment.apiRoute + `region/province/${idDepartment}`);
  }
}
