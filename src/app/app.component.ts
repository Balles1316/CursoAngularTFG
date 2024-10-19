import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormularioComponent} from './module/task/formularioTask/formulario.component';
import {ListaTareasComponent} from './module/task/lista-tareas/lista-tareas.component';
import {GeneralModule} from './module/general/general.module';
import {FloatingButtonComponent} from './module/general/floating-button/floating-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, ListaTareasComponent, GeneralModule, FloatingButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
