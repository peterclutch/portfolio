import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'formatDate'})
export class FormatDatePipe implements PipeTransform {
  private datePipe: DatePipe;

  constructor() {
    this.datePipe = new DatePipe('en');
  }

  transform(value: Date): string {
    return this.datePipe.transform(value, 'MMMM yyyy');
  }
}
