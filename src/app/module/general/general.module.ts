import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router'; // Asegúrate de importar las rutas principales
import { routes } from '../../app.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    RouterModule
  ]
})
export class GeneralModule { }
