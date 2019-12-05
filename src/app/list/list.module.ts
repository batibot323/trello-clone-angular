import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }