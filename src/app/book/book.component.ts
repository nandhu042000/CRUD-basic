import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() books: any;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  onDelete(id: any){
    // console.log(`${id} Clicked`)
    this.bookService.deleteBook(id).subscribe((res)=>{
      console.log("deleted");
      if(res.status==true){
        this.bookService.getBooks().subscribe();
      }
    })
  }
  onAdd(id: any){
    // console.log(`${id} Clicked`)
    this.bookService.addBook(id).subscribe((res)=>{
      console.log("added");
      if(res.status==true){
        this.bookService.getBooks().subscribe();
      }
    })
  }

}
