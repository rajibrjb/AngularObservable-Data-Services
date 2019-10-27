import { Component, OnInit } from '@angular/core';

import { BookService } from '../../_services/book.service';
import { Book } from '../../_models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books: Book[] = [];
  book: Book = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.books.subscribe(x => {
      this.books = x;
    });

    this.bookService.book.subscribe(x => {
      this.book = x;
    });

    this.bookService.loadAll().subscribe(x => {
      console.log(x);
    });
    // this.bookService.load('2').subscribe(x => {
    //   console.log(x);
    // });
  }

  delete(bookId: number) {
    this.bookService.remove(bookId).subscribe(x => {
      console.log(x);
    });
  }
}
