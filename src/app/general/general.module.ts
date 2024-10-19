import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class GeneralModule { }
