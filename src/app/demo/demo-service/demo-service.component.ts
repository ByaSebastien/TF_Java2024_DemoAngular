import { Component } from '@angular/core';
import {BookService} from './services/book.service';
import {BookModel} from './models/book.model';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrl: './demo-service.component.scss'
})
export class DemoServiceComponent {

  books: BookModel[];

  constructor(
    private readonly _bookService: BookService,
  ) {
    this.books = this._bookService.getBooks();
  }

  deleteBook(id: number) {
    this._bookService.removeBook(id);
  }
}
