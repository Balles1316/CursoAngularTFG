import { Component, inject } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service'; // Importa el servicio que vas a crear

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  private firestore: Firestore = inject(Firestore);
  items$!: Observable<Task[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    const itemCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(itemCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  async deleteItem(id: string) {
    const itemDoc = doc(this.firestore, `items/${id}`);
    await deleteDoc(itemDoc);
  }

  loadTaskForEdit(task: Task) {
    // Envía la tarea al servicio para que el formulario la cargue
    this.taskService.changeTask(task);
  }

  trackById(index: number, item: Task): string {
    return item.id;
  }
}
