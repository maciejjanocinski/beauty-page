import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
    animations: [
      trigger('fadeInOut', [
        state('in', style({ opacity: 1 })),
        transition('void => *', [
          style({ opacity: 0 }),
          animate(1260) // Czas trwania animacji w milisekundach
        ]),
        transition('* => void', [
          animate(300, style({ opacity: 0 }))
        ])
      ])
    ]
})
export class AboutComponent {
animState = 'in'; // Inicjalny stan animacji
animTekst = 'in';
  pokazZdjecie = true; // Inicjalnie ukryj zdjęcie
  pokazTekst = true;

  pokazZdjeciePoKliknieciu() {
    this.pokazZdjecie = true;
  }
pokazTekstPoKliknieciu() {
    this.pokazTekst = true;
}
  ukryjZdjecie() {
    this.pokazZdjecie = false;
  }

ukryjTekst() {
  this.pokazTekst = false;

}
}
