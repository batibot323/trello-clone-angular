import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cardIds: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
