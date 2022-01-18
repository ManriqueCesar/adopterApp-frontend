import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_pages/login/login.component';
import { AdopterDetailComponent } from './_pages/adopter/adopter-detail/adopter-detail.component';
import { AdopterRegisterComponent } from './_pages/adopter/adopter-register/adopter-register.component';
import { OrganizationComponent } from './_pages/organization/organization.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbaComponent } from './shared/navba/navba.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';


import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from "primeng/inputmask";
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StepsModule } from 'primeng/steps';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdopterComponent } from './_pages/adopter/adopter.component';
import { SearchComponent } from './_pages/organization/search/search-component';
import { appRoutingModule } from './app.routing';
import { MyRegisters } from './_pages/organization/adopter-register/my-registers-component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdopterDetailComponent,
    AdopterRegisterComponent,
    AdopterComponent,
    OrganizationComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    NavbaComponent,
    SidebarComponent,
    SpinnerComponent,
    MyRegisters
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    BrowserModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputMaskModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    appRoutingModule,
    ConfirmDialogModule,

    ReactiveFormsModule,
    CardModule,
    ImageModule,

    BrowserAnimationsModule,
    StepsModule,
    CheckboxModule,
    TabMenuModule,
    MenubarModule,
    BreadcrumbModule,
    TagModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
