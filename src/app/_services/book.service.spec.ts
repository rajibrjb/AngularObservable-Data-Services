/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { BookService } from './book.service';
import { Book } from '../_models/book';
import { environment } from 'src/environments/environment';

describe('Service: Book', () => {
  let service: BookService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService]
    });

    // service = TestBed.get(BookService);
    // httpMock = TestBed.get(HttpTestingController);

  });

  // it('should retrive books from the api via get', () => {
  //   const dummybooks: Book[] = [
  //     {"id":"1","name":"rajib","description":"mahinsd"},
  //     {"id":"2","name":"rajib","description":"bangladesh"},
  //     {"id":"3","name":"Mahin","description":"Australia"}
  //   ];
  //   service.books.subscribe( books => {
  //     expect(books.length).toBe(3);
  //     expect(books).toEqual(dummybooks);
  //   });

  //   const request = httpMock.expectOne(`${this.api}books`);
  //   expect(request.request.method).toBe('GET');
  //   request.flush(dummybooks);

  // });

  // it('should be created', () => {
  //   const service: BookService = TestBed.get(BookService);
  //   expect(service).toBeTruthy();
  //  });

  //  it('should have getData function', () => {
  //   const service: BookService = TestBed.get(BookService);
  //   expect(service.loadAll).toBeTruthy();
  //  });

});
