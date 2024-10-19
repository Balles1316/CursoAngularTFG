// src/app/task.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model'; // Asegúrate de que la ruta a tu modelo Task sea correcta

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Crear un BehaviorSubject para manejar el estado de la tarea seleccionada
  private taskSource = new BehaviorSubject<Task | null>(null);
  // Observable que los componentes pueden suscribirse
  currentTask$ = this.taskSource.asObservable();

  // Método para cambiar la tarea
  changeTask(task: Task | null) {
    this.taskSource.next(task);
  }
}
