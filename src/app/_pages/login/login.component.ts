import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/_models/usuario';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  responseCode: number;
  returnUrl: string;
  currentUser: Usuario;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { 
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.initAdopterForm();
      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  initAdopterForm() {
    this.userForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  auth() {

    this.authService.login(this.userForm.value.user, this.userForm.value.password).subscribe(response => {
      console.log(response);
      this.responseCode = response.httpStatus;

      switch (this.responseCode) {
        case 401:
          Swal.fire({
            icon: 'error',
            title: response.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          });
          break;
        case 200:
          Swal.fire({
            icon: 'success',
            title: response.message,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem('token',response.token);
          localStorage.setItem('currentUser', JSON.stringify({ nombre: response.usuario.usuario }));
          localStorage.setItem('currentUser', JSON.stringify({ idOrganization: response.usuario.idOrganization }));
          localStorage.setItem('organizationName',response.usuario.organizationName);
          localStorage.setItem('idOrganization',response.usuario.idOrganization );
          this.authService.currentUserSubject.next(new Usuario({ nombre: response.usuario.usuario }));
          //this.router.navigate([this.returnUrl]); 
          this.router.navigate(['organizacion']);
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
    })
  }

  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities 
  user_register() {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login() {
    this.userlogin = true;
    this.userregister = false;
  }

}
