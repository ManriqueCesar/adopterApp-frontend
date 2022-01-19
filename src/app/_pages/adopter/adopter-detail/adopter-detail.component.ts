import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AdopterService } from 'src/app/_services/adopter.service';

@Component({
  selector: 'app-adopter-detail',
  templateUrl: './adopter-detail.component.html',
  styleUrls: ['./adopter-detail.component.scss']
})
export class AdopterDetailComponent implements OnInit {

  docNumber : any;
  adopter : any;
  adopterDetail: any;
  adopterCommentary: any;
  breadcumb: MenuItem[];
  home: MenuItem;

  constructor(
    private adopterService: AdopterService
  ) { }

  ngOnInit(): void {
    this.docNumber = localStorage.getItem('adopterDoc');
    this.getAdopterDetail();
    this.getAdopterComments();

    this.breadcumb = [
      {label:'Organizacion', routerLink: '/organizacion'},
      {label:'Mis Registros', routerLink: '/organizacion/MisRegistros'},
      {label:'Detalle'},
   ];

   this.home = {icon: 'pi pi-home', routerLink: '/organizacion'}

  }

  getAdopterDetail(){
    
    this.adopterService.getByDocument(this.docNumber).subscribe(data => {
      this.adopterDetail = data.adopter[0];
      console.log(this.adopterDetail)
      console.log(data)
    })
  }

  getAdopterComments(){
    this.adopterService.getCommentary(this.docNumber).subscribe(data => {
      this.adopterCommentary = data;
      console.log(this.adopterCommentary);
    })
  
  }

}
