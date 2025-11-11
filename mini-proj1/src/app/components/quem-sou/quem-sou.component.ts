import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-sou',
  imports: [],
  templateUrl: './quem-sou.html',
  styleUrls: ['./quem-sou.css'],
})
export class QuemSouComponent {
  mostrarMais: boolean = false;

  scrollParaSobre() {
    const section = document.getElementById('sobre');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
