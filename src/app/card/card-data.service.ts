import { Injectable } from '@angular/core';
import { ICard } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {
  cardList: ICard[];

  getCard(id: number): ICard {
    return this.cardList[id - 1];
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
      },
      {
        id: 4,
        title: "Cook Rice",
        description: "Make sure you put the right amount of water."
      },
      {
        id: 5,
        title: "Meet Rion",
        description: "Food place @ 10 pm."
      },
      {
        id: 6,
        title: "10 Pushups",
        description: "Do it before eating."
      },
      {
        id: 7,
        title: "Bake Cookies",
        description: "Mix ingredients, put in oven, then wait."
      },
      {
        id: 8,
        title: "Read Bible",
        description: "Take notes and share with others."
      },
      {
        id: 9,
        title: "Pray",
        description: "Our Father x 10"
      },
      {
        id: 10,
        title: "Watch Movie",
        description: "Watch a Korean one."
      }
    ]
  }
}
