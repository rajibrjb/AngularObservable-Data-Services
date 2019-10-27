import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../_services/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
    this.createBookForm();
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.bookService.create(this.bookForm.value).subscribe(x => {
        this.bookForm.reset();
      });
    }
  }

  createBookForm() {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      description: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(255)]],
    });
  }
}
