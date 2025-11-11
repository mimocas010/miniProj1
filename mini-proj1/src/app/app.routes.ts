import { Routes } from '@angular/router';
import { QuemSouComponent } from './components/quem-sou/quem-sou.component';
import { OqueFacoComponent } from './components/oque-faco/oque-faco.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

export const routes: Routes = [
  { path: '', redirectTo: 'quem-sou', pathMatch: 'full' },
  { path: 'quem-sou', component: QuemSouComponent },
  { path: 'oque-faco', component: OqueFacoComponent },
  { path: 'hobbies', component: HobbiesComponent }
];
