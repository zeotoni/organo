import { Component } from '@angular/core';
import { BooksListComponent } from "./shared/components/books-list/books-list.component";
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LiteraryGenreComponent } from './shared/components/literary-genre/literary-genre.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, BooksListComponent, LiteraryGenreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'organo';
}
