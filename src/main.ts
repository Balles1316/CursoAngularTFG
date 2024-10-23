// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { GeneralModule } from './app/module/general/general.module';
import {NotesModule} from './app/module/notes/notes.module';
import {TaskModule} from './app/module/task/task.module'; // Importa tu módulo general

bootstrapApplication(AppComponent,
  {
    providers: [
      {provide: GeneralModule},
      {provide: NotesModule},
      {provide: TaskModule}
    ]
  })
  .catch((err) => console.error(err));
