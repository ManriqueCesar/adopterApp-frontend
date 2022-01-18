import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, MinLengthValidator, RequiredValidator, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { Adopter } from 'src/app/_models/adopter';
import { OrganizationService } from 'src/app/_services/organization.service';
@Component({
  selector: 'my-registers',
  templateUrl: './my-registers.component.html',
  styleUrls: ['./adopter-register.component.css']
})
export class MyRegisters implements OnInit {

 
  adopterList: any;
  adopter: Adopter;
  documentNumber: String;
  adopterOrganization: {};
  idOrganization: number = 1;
  response: any;
  responseCode: number;
  adopterForm: FormGroup;
  severityTag: String;

  items: MenuItem[];
  home: MenuItem;

  constructor(
    private organizationService :OrganizationService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initAdopterForm();
    this.initAdopterList();

    this.items = [
      {label:'Organización'},
      {label:'Mis registros'}
   ];
  
    this.home = {icon: 'pi pi-home', routerLink: '/'}

  }

  initAdopterList(){
    this.organizationService.listAdopters(this.idOrganization).subscribe(res=>{
      console.log(res);
      this.adopterList = res.adopter;
    })

  }

  initAdopterForm() {
    this.adopterForm = this.formBuilder.group({
      documentNumber: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.adopterForm.controls;
  }

  navigate(docNumber: any){
    localStorage.setItem('adopterDoc',docNumber);
    window.location.href = 'adoptante/detalle';

  

  }

  
}
