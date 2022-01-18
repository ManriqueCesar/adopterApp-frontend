import { Component, OnInit } from '@angular/core';
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
  temp: any;

  constructor(
    private adopterService: AdopterService
  ) { }

  ngOnInit(): void {
    this.docNumber = localStorage.getItem('adopterDoc');
    this.getAdopterDetail();
    this.getAdopterComments();
  }

  getAdopterDetail(){
    
    this.adopterService.getByDocument(this.docNumber).subscribe(data => {
      this.temp = data;
      this.adopter = this.temp.adopter;
      this.adopterDetail = this.adopter[0];
    })
  }

  getAdopterComments(){
    this.adopterService.getCommentary(this.docNumber).subscribe(data => {
      this.temp = data;
      this.adopterCommentary = data;
      console.log(data);
    })
  
  }

}
