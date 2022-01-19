import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AbstractControl, FormBuilder, FormGroup, MinLengthValidator, RequiredValidator, Validators } from '@angular/forms';
import { OrganizationService } from 'src/app/_services/organization.service';
import { MenuItem } from 'primeng/api';
import { Adopter } from 'src/app/_models/adopter';
import { AdopterService } from 'src/app/_services/adopter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
    adopterList: any;
    adopter: Adopter;
    documentNumber: String;
    adopterOrganization: {};
    idOrganization: any;
    response: any;
    responseCode: number;
    adopterForm: FormGroup;
    
    items: MenuItem[];
    home: MenuItem;
  
    constructor(
      private adopterService : AdopterService,
      private organizationService : OrganizationService,
      private formBuilder: FormBuilder, 
      private router: Router) { }
  
    ngOnInit(): void {
      this.idOrganization = localStorage.getItem('idOrganization');
      this.initAdopterForm();
  
      this.items = [
        {label:'Organización'},
        {label:'Buscar Adoptante'}
     ];
    
      this.home = {icon: 'pi pi-home', routerLink: '/'}
  
    }
  
  
    initAdopterForm() {
      this.adopterForm = this.formBuilder.group({
        documentNumber: ['', Validators.required],
      });
    }
  
    get f(): { [key: string]: AbstractControl; } {
      return this.adopterForm.controls;
    }
  
    searchAdopter() {
  
      console.log(this.adopterForm)
      if (this.adopterForm.invalid) {
  
        Swal.fire({
          icon: 'warning',
          title: 'El documento debe ser igual o mayor a 8 dígitos',
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          title: 'La siguiente acción le restará una búsqueda semanal. ¿Desea continuar?',
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: 'Ok',
          denyButtonText: `Cancelar`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.adopterOrganization = {
              'idOrganization': this.idOrganization,
              'documentNumber': this.adopterForm.value.documentNumber
            }
            this.organizationService.search(this.adopterOrganization).subscribe(res => {
              this.response = res;
              this.responseCode = this.response.httpStatus;
              switch (this.responseCode) {
                case 403:
                  Swal.fire({
                    icon: 'warning',
                    title: this.response.message,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  break;
                case 404:
                  Swal.fire({
                    icon: 'warning',
                    title: this.response.message,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  break;
                case 302:
                  Swal.fire({
                    icon: 'success',
                    title: this.response.message,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
                  this.adopterList = this.response.adopter;
                  
                  break;
  
  
                default:
                  Swal.fire({
                    icon: 'error',
                    title: 'Error desconocido. Intente nuevamente ',
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
                  break;
              }
            });
          }
        });
      }
    }

    edit(adopterDoc: any){
      localStorage.setItem('adopterDoc',adopterDoc);
      this.router.navigate(['/adoptante/detalle']);
      
    }
    
    delete(idAdopter: number){
      Swal.fire({
        title: 'Se eliminará el adoptante permanentemente. ¿Desea continuar?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sí',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.adopterService.delete(idAdopter).subscribe(res => {
            this.response = res;
            this.responseCode = this.response.httpStatus;
            switch (this.responseCode) {
              case 403:
                Swal.fire({
                  icon: 'warning',
                  title: this.response.message,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500
                });
                break;
                case 200:
                  Swal.fire({
                    icon: 'warning',
                    title: this.response.message,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  this.adopterList = null;
                  break;
              case 302:
                Swal.fire({
                  icon: 'success',
                  title: this.response.message,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500
                });
                
                this.adopterList = this.response.adopter;
                
                break;


              default:
                Swal.fire({
                  icon: 'error',
                  title: 'Error desconocido. Intente nuevamente ',
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500
                });
                
                break;
            }
          });
        }
      });
    
    }

    disable(idAdopter: number){
      Swal.fire({
        title: 'No podrá volver a visualizar al adoptante ¿Desea continuar?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Sí',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.adopterService.logicalDelete(idAdopter).subscribe(res => {
            this.response = res;
            this.responseCode = this.response.httpStatus;
            switch (this.responseCode) {
              case 403:
                Swal.fire({
                  icon: 'warning',
                  title: this.response.message,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500
                });
                break;
                case 200:
                  Swal.fire({
                    icon: 'warning',
                    title: this.response.message,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  this.adopterList= null;

                break;
              case 302:
                Swal.fire({
                  icon: 'success',
                  title: this.response.message,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500
                });
                
                break;


              default:
                Swal.fire({
                  icon: 'error',
                  title: 'Error desconocido. Intente nuevamente ',
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1500
                });
                
                break;
            }
          });
        }
      });
    }
  
  }
  