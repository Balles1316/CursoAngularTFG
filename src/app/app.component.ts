import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormularioComponent} from './components/formulario/formulario.component';
import {ListaTareasComponent} from './components/lista-tareas/lista-tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
