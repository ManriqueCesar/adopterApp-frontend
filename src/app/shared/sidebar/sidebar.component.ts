import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    
    var fullHeight = function() {
  
      // $('.js-fullheight').css('height', $(window).height());
      // $(window).resize(function(){
      //   $('.js-fullheight').css('height', $(window).height());
      // });
  
    };
    fullHeight();
    
  }

  resize(){
    console.log("clickeado");
    $('#sidebar').toggleClass('active');
  }

}
