import { Injectable } from '@angular/core';
import {BookModel} from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: BookModel[] = [
    {id: 1, title: "L'art de la guerre", author: 'Sun Tzu', description: '...'},
    {id: 2, title: "Martine à la plage", author: 'Martine', description: '...'},
    {id: 3, title: "Toto fais le fou", author: 'Toto', description: '...'},
  ];

  constructor() {
    console.log('In')
  }

  getBooks(){
    return this.books;
  }

  getById(id: number): BookModel | null{
    let book : BookModel | undefined = this.books.find(book => book.id === id);
    return book ? book : null;
  }

  addBook(newBookModel: BookModel){
    this.books.push(newBookModel);
  }

  removeBook(id: number){
    let book: BookModel | null = this.getById(id);
    if (book){
      this.books.splice(this.books.indexOf(book), 1);
    }
  }
}
