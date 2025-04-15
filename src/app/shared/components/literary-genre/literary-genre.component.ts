import { Component } from '@angular/core';
import { books } from '../../../mock-books';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-literary-genre',
  imports: [BookComponent],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.scss'
})
export class LiteraryGenreComponent {
  book = books[0];
}
