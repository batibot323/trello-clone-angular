import { Component, OnInit, Input } from '@angular/core';
import { CardDataService } from './card-data.service';
import { ICard } from './card';

@Component({
  selector: 'tc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  card: ICard = {} as ICard;

  constructor(private data: CardDataService) {
  }

  ngOnInit() {
    this.card = this.data.getCard(this.id);
    console.log(this.card);
  }

}
