import { Component, OnInit } from '@angular/core';
import { CardDataService } from './card-data.service';
import { ICard } from './card';

@Component({
  selector: 'tc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card: ICard

  constructor(private data: CardDataService) {
    this.card = {} as ICard;
  }

  ngOnInit() {
    this.card.id = Math.floor(1 + Math.random()*3);
    this.card = this.data.getCard(this.card.id);
    console.log(this.card);
  }

}
