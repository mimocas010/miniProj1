import { Component } from '@angular/core';
import { OqueFacoComponent } from '../oque-faco/oque-faco.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quem-sou',
  imports: [OqueFacoComponent, HobbiesComponent],
  templateUrl: './quem-sou.html',
  styleUrls: ['./quem-sou.css'],
})
export class QuemSouComponent {
  mostrarMais: boolean = false;

  constructor(private router: Router) {}

   scrollPara(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }

  
}
