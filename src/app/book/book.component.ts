import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: any;
  @Output() delete = new EventEmitter();
  @Output() add = new EventEmitter();
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  onAddClicked(book: any){
    this.add.emit(book)
  }

  onDeleteClicked(book: any){
    this.delete.emit(book)
  }

  // onDelete(id: any){
  //   // console.log(`${id} Clicked`)
  //   this.bookService.deleteBook(id).subscribe((res)=>{
  //     console.log("deleted");
  //     if(res.status==true){
  //       this.bookService.getBooks().subscribe();
  //     }
  //   })
  // }
  // onAdd(id: any){
  //   // console.log(`${id} Clicked`)
  //   this.bookService.addBook(id).subscribe((res)=>{
  //     console.log("added");
  //     if(res.status==true){
  //       this.bookService.getBooks().subscribe();
  //     }
  //   })
  // }

}
