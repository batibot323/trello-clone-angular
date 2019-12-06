import { Injectable } from '@angular/core';
import { ICard } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  cardList: ICard[];

  getCard(id: number): ICard {
    return this.cardList[id];
  }

  constructor() {
    this.initCardList();
  }

  initCardList() {
    this.cardList = [
      {
        id: 1,
        title: "Drink Water!",
        description: "Drink 8 glasses of water! Stay hydrated, king!"
      },
      {
        id: 2,
        title: "Read a book",
        description: "It can be any book, a technical book, or just for enjoyment."
      },
      {
        id: 3,
        title: "Finish Gym Module",
        description: "Make sure it includes proper routing."
      }
    ]
  }
}
