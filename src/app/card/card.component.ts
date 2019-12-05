import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  id: number;
  title: string;
  description: string;

  constructor() { 
    this.id = 1;
    this.title = "Title";
    this.description = "Description";
  }

  ngOnInit() {
  }

}
