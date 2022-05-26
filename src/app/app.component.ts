import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  booksy: any;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.bookService.getBooks().subscribe((books) => {
      this.booksy = books ;
    });
  }

  onDelete(book: any){
    this.bookService.deleteBook(book.id).subscribe((res)=>{
      this.getData();
    })
  }
  
  onAdd(book: any){
    this.bookService.addBook(book.id).subscribe((res)=>{
      this.getData();
    })
  }
}
