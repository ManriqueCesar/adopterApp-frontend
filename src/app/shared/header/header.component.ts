import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
    
  activeItem: MenuItem;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        routerLink: '/',
      
      },
      {
        label: 'Inicio', icon: 'pi pi-fw pi-home',
        routerLink: '/organizacion',
      },
      {
        label: 'Buscar Adoptante', icon: 'pi pi-fw pi-search',
        routerLink: '/organizacion/buscar'
      },
      {
        label: 'Registrar Adoptante', icon: 'pi pi-fw pi-pencil',
        routerLink: '/registro'
      },
      {
        label: 'Mis Registros', icon: 'pi pi-fw pi-pencil',
        routerLink: '/organizacion/MisRegistros'
      },
      {
        label: 'Sobre Kimsuki', icon: ' pi pi-fw pi-heart',
        routerLink: '/about',
        
      }
  ];
  
  this.activeItem = this.items[0];
  }

  salir(){
    this.router.navigate(['login'])
    localStorage.clear();
  }

}
