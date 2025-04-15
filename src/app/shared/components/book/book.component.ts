import { Component, input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  book = input.required<Book>();

  toggleFavorite(): void {
    this.book().favorite = !this.book().favorite;
  }
}
