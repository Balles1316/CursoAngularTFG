import { Component, inject } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../task.service';
import {Task} from '../../../task.model'; // Importa el servicio

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [AsyncPipe, NgFor, FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  private firestore: Firestore = inject(Firestore);
  title: string = '';
  description: string = '';
  status: string = 'pendiente'; // Valor por defecto
  isEditMode: boolean = false; // Para saber si estamos en modo edición

  constructor(private taskService: TaskService) {
    // Suscribirse a los cambios en el servicio
    this.taskService.currentTask$.subscribe(task => {
      if (task) {
        this.loadTask(task);
        this.isEditMode = true; // Activar modo edición
      } else {
        this.resetForm();
        this.isEditMode = false; // Desactivar modo edición
      }
    });
  }

  async addItem() {
    const item = { title: this.title, description: this.description, status: this.status };
    await addDoc(collection(this.firestore, 'items'), item);
    this.resetForm();
  }

  loadTask(task: Task) {
    this.title = task.title;
    this.description = task.description;
    this.status = task.status;
  }

  private resetForm() {
    this.title = '';
    this.description = '';
    this.status = 'pendiente'; // Restablecer al valor por defecto
  }
}
