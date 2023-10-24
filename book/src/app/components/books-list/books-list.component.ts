import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  Books: any = [];
  constructor(private crudApi: CrudService) {}
  ngOnInit(): void {
    this.crudApi.getBooks().subscribe((res) => {
      this.Books = res;
    });
  }
  delete(id: any, i: any,event:Event) {
    event.preventDefault()
    if (window.confirm('Are you sure want to delete')) {
      this.crudApi.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
      });
    }
  }
}
