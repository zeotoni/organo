import { Component } from '@angular/core';
import { BookComponent } from './shared/components/book/book.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'organo';
}
