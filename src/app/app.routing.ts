import { Routes, RouterModule } from '@angular/router';
import { HomeAuthGuard } from './_helpers';
import { AdopterDetailComponent } from './_pages/adopter/adopter-detail/adopter-detail.component';
import { AdopterRegisterComponent } from './_pages/adopter/adopter-register/adopter-register.component';
import { AdopterComponent } from './_pages/adopter/adopter.component';
import { LoginComponent } from './_pages/login/login.component';
import { MyRegistersComponent } from './_pages/organization/myRegisters/my-registers-component';
import { OrganizationComponent } from './_pages/organization/organization.component';
import { SearchComponent } from './_pages/organization/search/search-component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', children: [], component: LoginComponent},
  { path: '', pathMatch: 'full', children: [], canActivate: [HomeAuthGuard]},
  { path: 'adoptante', component: AdopterComponent, canActivate: [HomeAuthGuard] },
  { path: 'adoptante/detalle', component: AdopterDetailComponent, canActivate: [HomeAuthGuard] },
  { path: 'registro', component: AdopterRegisterComponent,  canActivate: [HomeAuthGuard]},
  { path: 'organizacion', component: OrganizationComponent,  canActivate: [HomeAuthGuard]},
  { path: 'organizacion/buscar', pathMatch: 'full', children: [], component: SearchComponent, canActivate: [HomeAuthGuard]},
  { path: 'organizacion/MisRegistros', pathMatch: 'full', children: [], component:  MyRegistersComponent ,canActivate: [HomeAuthGuard] },
  { path: '**', redirectTo: '' }

  // otherwise redirect to home
];

export const appRoutingModule = RouterModule.forRoot(routes);