import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzservice: DbzService) {}

  get characters(): Character[] {
    return[...this.dbzservice.characters]
  }

  onNewCharacter(character: Character): void {
    this.dbzservice.onNewCharacter(character);
  }

  onDeleteCharacter(id: string): void {
  this.dbzservice.onDeleteCharacter(id);
  }

}
