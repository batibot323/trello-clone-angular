import { Injectable } from '@angular/core';
import { CardModule } from './card.module';
import { ICard } from './card';

@Injectable({
  providedIn: CardModule
})
export class CardDataService {
  cardList: ICard[];

  constructor() { }
}
