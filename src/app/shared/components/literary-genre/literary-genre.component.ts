import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Genre } from '../book/book';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-literary-genre',
  imports: [BookComponent, CommonModule],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.scss'
})
export class LiteraryGenreComponent {

  genre = input.required<Genre>();
}
