import { Component } from '@angular/core';

@Component({
  selector: 'app-oque-faco',
  imports: [],
  templateUrl: './oque-faco.html',
  styleUrl: './oque-faco.css',
})
export class OqueFacoComponent {
  scrollPara(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
