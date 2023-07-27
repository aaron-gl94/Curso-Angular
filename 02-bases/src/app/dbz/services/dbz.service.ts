import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    }, {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }, {
      id: uuid(),
      name: 'Vegeta',
      power: 10000
    }, {
      id: uuid(),
      name: 'Gohan',
      power: 15000
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter:Character = { id: uuid(), ...character } 

    this.characters.push(newCharacter);
  }

  /* onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  } */

  deleteCharacterById(id:string):void {
    this.characters = this.characters.filter( characters => characters.id !== id);
  }
}
