import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent {

  // @Input('data') personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}

}
