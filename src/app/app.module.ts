import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BookService } from './_services/book.service';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
   declarations: [
      AppComponent,
      BooksComponent,
      FormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   exports: [
    FormsModule,
    ReactiveFormsModule
  ],
   providers: [
      BookService
   ],
   bootstrap: [
      AppComponent
   ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
