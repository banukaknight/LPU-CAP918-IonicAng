import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  loadedBook: { bid: string; btitle: string; imageUrl: string; authors: string[]; };

  constructor(private ActivateRoute: ActivatedRoute,
    private bookService: BooksService) { }
  ngOnInit() {
    this.ActivateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('bookId')) {
        return;
      }
      const bookId = paramMap.get('bookId');
      this.loadedBook = this.bookService.getBook(bookId);
    });
  }
}
