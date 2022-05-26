import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}
  getBooks() {
    return this.http.get('http://localhost:2222/book-list');
  }
  deleteBook(id:any){
    return this.http.delete<any>('http://localhost:2222/book-delete/'+id)
  }
  addBook(id:any){
    return this.http.put<any>('http://localhost:2222/book-put/'+id,{})
  }
}
