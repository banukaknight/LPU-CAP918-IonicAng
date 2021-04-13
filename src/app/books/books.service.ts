import { Injectable } from '@angular/core';
import { Book } from './book.model';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book []=[
    {
      bid:'AI-1010',
      btitle: 'Image Processing',
      imageUrl: 'https://media.springernature.com/w153/springer-static/cover/book/9789811605079.jpg',
      authors:['Santosh, K.C.', 'Gawali']
    },
    {
      bid:'IoT-1011',
      btitle: 'Internet of Things',
      imageUrl: 'https://media.springernature.com/w138/springer-static/cover/journal/43926/1/1.jpg',
      authors:['Ishfaq Ahmad', 'Mayiami', 'Mohammad']
    }
  ];
  constructor() {}
  getAllBooks() {
    return [...this.books];
  }
  getBook(bookId: string){
    return {
      ...this.books.find(book=> {
      return book.bid===bookId;
    })
  };
  }

  deleteBook(bookId: string){
    this.books=this.books.filter(book=>{
    return book.bid !== bookId;
    });
    }

}

