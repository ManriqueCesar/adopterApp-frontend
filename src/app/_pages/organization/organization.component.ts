import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuario } from 'src/app/_models/usuario';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { OrganizationService } from 'src/app/_services/organization.service';
import { DatePipe } from '@angular/common'

import Swal from 'sweetalert2'

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  idOrganization: any;
  temp : any;
  petOrganization: any;
  habilitado : boolean;
  editarEnabled: boolean = false;
  items: MenuItem[];
  home: MenuItem;
  currentUser: Usuario;
  fechaFundacion : any;

  title: string;

  constructor(
    private organizationService: OrganizationService,
    private authenticationService: AuthenticationService,
    private datepipe: DatePipe
  ) { 

    this.title = "Organizacion - Perfil"
    this.currentUser = this.authenticationService.currentUserValue;

  }

  ngOnInit(): void {
    
    this.idOrganization = this.currentUser.idOrganization;
    this.findById();
    //this.id=localStorage.getItem('idOrganization');

    this.items = [
      {label:'Organización'}
   ];
  
    this.home = {icon: 'pi pi-home', routerLink: '/'}
  }

  findById(){
    this.organizationService.findById(this.idOrganization).subscribe(data=>{
      this.temp = data;
      console.log(this.temp);
      if(this.temp.message == "Organizacion encontrada."){
        this.petOrganization = this.temp.petOrganization[0];
        this.habilitado = this.petOrganization.status;
      }else{
        
      }
    });
  }

  edit(){

   var object = {
      idOrganization: this.idOrganization,
      phone: this.petOrganization.phone,
      email: this.petOrganization.email,
      websiteLink: this.petOrganization.websiteLink,
      instagramLink: this.petOrganization.instagramLink,
      twitterLink: this.petOrganization.twitterLink,
      facebookLink : this.petOrganization.facebookLink,
      cantidadMiembros: this.petOrganization.cantidadMiembros
    };

    this.organizationService.edit(object).subscribe(res => {
      this.temp = res;
      console.log(res);

     switch (this.temp.httpStatus) {
        case 409: 
          Swal.fire({
            icon: 'warning',
            title: this.temp.message,
            showConfirmButton: false,
            timer: 1500});
          break;
        case 200: 
          Swal.fire({
            icon: 'success',
            title: this.temp.message,
            showConfirmButton: false,
            timer: 3000});
            this.petOrganization = this.temp.petOrganization[0];
          break;
        case 500: 
          Swal.fire({
            icon: 'error',
            title: this.temp.message,
            showConfirmButton: false,
            timer: 3000});
          break;
          
        default:
          Swal.fire({
            icon: 'error',
            title: 'Ocurrió un error inesperado, intente nuevamente.',
            showConfirmButton: false,
            timer: 3000});
          break;
      }
      if(this.temp.httpStatus){
        this.petOrganization = this.temp.petOrganization[0];
      }else{
        
      }
    });
    this.editarEnabled = false;
  }

  button(){
    this.editarEnabled?this.editarEnabled=false:this.editarEnabled=true;
  }

  



}
