import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { AdopterService } from 'src/app/_services/adopter.service';
import { DocumentService } from 'src/app/_services/document.service';
import { RegionService } from 'src/app/_services/region.service';
import { SeverityService } from 'src/app/_services/severity.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-adopter-register',
  templateUrl: './adopter-register.component.html',
  styleUrls: ['./adopter-register.component.css']
})
export class AdopterRegisterComponent implements OnInit {

  checked: boolean = false;
  activeIndex: number = 0;
  idOrganization : any;
  enabledNext: boolean = false;

  severityList: any;
  severityValue: any;

  documentList: any;
  documentValue: any;

  genderList: any;
  genderValue: any;

  departmentList: any;
  departmentValue: any;

  provinceList: any;
  provinceValue: any;

  districtList: any;
  districtValue: any;

  organizationName: string = 'AdopterApp-';

  submitted: boolean;
  adopterForm: FormGroup;
  adopter: {};

  breadcumb: MenuItem[];
  home: MenuItem;
  items: MenuItem[];

  constructor(
    private severityService: SeverityService,
    private documentService: DocumentService,
    private formBuilder: FormBuilder,
    private adopterService : AdopterService,
    private regionService : RegionService,
    private datepipe: DatePipe
  ) { 
    //this.idOrganization = localStorage.getItem('idOrganization'); pendiente
    this.idOrganization = 1;
  }


  ngOnInit(): void {

    this.initStepForm();
    this.initSeverity();
    this.initDocument();
    this.initGender();
    this.initDepartment();

    this.initAdopterForm();
    this.departmentList = [{
      name : "LIMA",
      id: 15
    }];

    
    this.breadcumb = [
      {label:'Adoptante'},
      {label:'Registro'}
   ];
  
    this.home = {icon: 'pi pi-home', routerLink: '/'}

  }


  get f(): { [key: string]: AbstractControl; } {
    return this.adopterForm.controls;
  }


  initAdopterForm() {
    this.adopterForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [null],
      documentNumber: ['',Validators.required],
      comments: [''],
      evidence: [''],
      birthDate: [Date],
      issueDate: ['']
    });
  }

  

  initStepForm() {
    this.items = [{
      label: 'Datos',
      command: () => this.activeIndex = 0
    },
    {
      label: 'Tipo',
      command: () => this.activeIndex = 1
    },
    {
      label: 'Finalizar',
      command: () => this.activeIndex = 2
    }];
  }

  initSeverity() {
    this.severityList = {};
    this.severityValue = { id: 0 }
    this.severityService.list().subscribe(data => this.severityList = data);
  }

  initDocument() {
    this.documentList = {};
    this.documentValue = { id: 0 }
    this.documentService.list().subscribe(data => this.documentList = data);
  }

  initGender() {
    this.genderList = {};
    this.genderValue = { id: 0 }
    this.genderList = [{
      "id": 1,
      "description": "MASCULINO"
    },
    {
      "id": 2,
      "description": "FEMENINO"
    }];
  }


  
  initDepartment(){
    this.departmentList = {};
    this.regionService.listDepartment().subscribe(data => this.departmentList = data);

  }

  initProvincia(idDepartamento: any){
    this.provinceList = {};
    this.regionService.listProvince(idDepartamento).subscribe(data => this.provinceList = data);
    this.provinceValue = { id : 15 }
  }

  initDistrito(idProvincia : number){
    this.districtList = {};
    this.regionService.listDistrict(idProvincia).subscribe(data => this.districtList = data);
    this.districtValue = { id : 15 }
  }



  register() {

    let fechaIncidente = this.datepipe.transform(this.adopterForm.value.issueDate, 'dd/MM/yyyy');

    this.adopter = {
      birthDate: this.adopterForm.value.birthDate,
      firstName: this.adopterForm.value.firstName,
      lastName: this.adopterForm.value.lastName,
      documentNumber: this.adopterForm.value.documentNumber,
      phone: this.adopterForm.value.phone,
      comments: this.adopterForm.value.comments,
      evidence: this.adopterForm.value.evidence,
      issueDate: fechaIncidente,
      idGender: this.genderValue,
      idDocument: this.documentValue,
      idSeverity: this.severityValue,
      idOrganization : this.idOrganization,
      idDistrito : this.districtValue,
      idDepartamento : this.departmentValue,
      idProvincia : this.provinceValue,
      
    }
    console.log(this.adopterForm);
    console.log(this.adopter);

    if(this.adopterForm.status){
    
      this.adopterService.register(this.adopter).subscribe(response => {
        console.log(response);
        var status = response.httpStatus;
        var message = response.message;
        console.log(status);
        switch (status) {
          case 409: 
            Swal.fire({
              icon: 'warning',
              title: message,
              showConfirmButton: false,
              timer: 1500});
            break;
          case 201: 
            Swal.fire({
              icon: 'success',
              title: message,
              showConfirmButton: false,
              timer: 3000});
            break;
          case 500: 
            Swal.fire({
              icon: 'error',
              title: message,
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

      })
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Debe completar los campos obligatorios',  
        showConfirmButton: false,
        timer: 3000
      });
    }
  };

  enableButton(){
    if (this.adopterForm.status == "INVALID"){
      this.enabledNext = false;
    }else{
      this.enabledNext = true;
    }
  }

  next(index: number) {
    if(this.enabledNext){
      this.activeIndex = index + 1;
    }
   
  }
  previous(index: number) {
    this.activeIndex = index - 1;
  }

}
