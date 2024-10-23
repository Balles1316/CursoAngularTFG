import { Component } from '@angular/core';
import {FormularioComponent} from '../../module/task/formularioTask/formulario.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormularioComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
