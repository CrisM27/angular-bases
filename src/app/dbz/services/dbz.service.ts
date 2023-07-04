import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 10000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 9500
  }, {
    id: uuid(),
    name: 'Piccolo',
    power: 7550
  }]

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    this.characters = this.characters.filter(characters => characters.id != id);
  }

}
