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
    this.card.id = 1;
    this.card.title = "Title";
    this.card.description = "Description";
  }

  ngOnInit() {
  }

}
