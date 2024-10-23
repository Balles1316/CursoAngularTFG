// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';  // Ajusta la ruta al AppComponent según sea necesario

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,  // Establecemos AppComponent como la ruta raíz
    children: [
      { path: 'taskADD', component: HomeComponent },  // Ruta secundaria para 'taskADD'
      { path: '', redirectTo: 'taskADD', pathMatch: 'full' },  // Redirección inicial a 'taskADD'
    ]
  },
  { path: '**', redirectTo: '' }  // Redirige cualquier ruta no encontrada a la raíz
];
