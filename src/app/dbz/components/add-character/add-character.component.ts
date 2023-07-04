import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public addCharacter: Character = {
    name: '',
    power: 0
  }

  addNewCharacter() {
    if(this.addCharacter.name.length === 0) return;
    this.onNewCharacter.emit(this.addCharacter);

    this.addCharacter = { name: '', power: 0}
  }
}
