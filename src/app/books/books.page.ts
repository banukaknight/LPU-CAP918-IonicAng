import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import {BooksService} from  './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
 public books;
  // books: Book []=[
  //   {
  //     bid:'AI-1010',
  //     btitle: 'Image Processing',
  //     imageUrl: 'https://media.springernature.com/w153/springer-static/cover/book/9789811605079.jpg',
  //     authors:['Santosh, K.C.', 'Gawali']
  //   },
  //   {
  //     bid:'IoT-1011',
  //     btitle: 'Internet of Things',
  //     imageUrl: 'https://media.springernature.com/w138/springer-static/cover/journal/43926/1/1.jpg',
  //     authors:['Ishfaq Ahmad', 'Mayiami', 'Mohammad']
  //   }
  // ]

  constructor(private bookService:BooksService) { }

  ngOnInit() {
    this.books=this.bookService.getAllBooks();
  }

}
