import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from '../_models/book';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly api = environment.mockapi;
  private dataStore: { books: Book[] } = { books: [] };

  private $books = new BehaviorSubject<Book[]>([]);
  readonly books = this.$books.asObservable();

  private $book = new BehaviorSubject<Book>({
    id: 0,
    name: '',
    description: ''
  });
  readonly book = this.$book.asObservable();


  constructor(private http: HttpClient) { }

  loadAll() {
    return this.http.get<Book[]>(`${this.api}books`).pipe(
      map(data => {
        if (data) {
          this.dataStore.books = data;
          this.$books.next(data);
          return true;
        }
        return false;
      })
    );
  }

  load(id: number | string) {
    return this.http.get<Book>(`${this.api}books/${id}`).pipe(
      map(data => {
        if (data) {
          this.$book.next(data);
          return true;
        }
        return false;
      })
    );
  }

  create(book: any) {
    return this.http.post<Book>(`${this.api}books`, book).pipe(
      map(x => {
        // this.$books.next([...this.dataStore.books, x]);
        // this.$book.next(x);
        this.dataStore.books.push(x);
        this.$books.next(Object.assign({}, this.dataStore).books);
        this.$book.next(book);
        return true;
      })
    );
  }

  // update(book: Book) {
  //   this.http.put<Book>(`${this.api}books/${book.id}`, book).pipe(
  //     map(data => {
  //       const oldBook = this.dataStore.books.find(x => x.id === book.id);
  //       if (oldBook) {
  //         oldBook.name = book.name;
  //         oldBook.description = book.description;
  //         this.$books.next([...this.dataStore.books]);
  //         this.$book.next(book);
  //         return true;
  //       }
  //       return false;
  //     })
  //   );
  // }

  remove(id: number) {
    return this.http.delete(`${this.api}books/${id}`).pipe(
      map(x => {
        const book = this.dataStore.books.find(y => y.id === id);
        if (book) {
          this.dataStore.books.splice(this.dataStore.books.indexOf(book), 1);
          this.$books.next(this.dataStore.books);
          this.$book.next(book);
          return true;
        }
        return false;
      })
    );
  }
}
