import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AdopterService } from 'src/app/_services/adopter.service';
import { Adopter } from 'src/app/_models/adopter';

@Component({
  selector: 'app-adopter',
  templateUrl: 'adopter.component.html',
  styleUrls: ['./adopter.component.scss']
})
export class AdopterComponent implements OnInit {


  adopterList : any;  
  adopter : Adopter;

  constructor(
      private messageService: MessageService, 
      private confirmationService: ConfirmationService,
      private adopterService: AdopterService ) { }

  ngOnInit() {
    this.getAdopterList();
  
  }

  getAdopterList(){
    this.adopterService.list().subscribe(x => {
        this.adopterList = x;
        console.log(x);
      })
  }

  detail(docNumber : string){
    localStorage.setItem('temp',docNumber)
  }


  deleteSelectedProducts() {

  }

  editProduct() {
  }

  deleteProduct() {
  }

  hideDialog() {
  }

  saveProduct() {
  }

  findIndexById() {
  }

  createId() {
  }

  openNew(){

  }
}
