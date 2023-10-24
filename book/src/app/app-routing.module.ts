import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'add-book',
    pathMatch:'full'
  },
  {
    path:'books-list',
    component:BooksListComponent
  },
  {
    path:'add-book',
    component:AddBookComponent
  },
  {
    path:'edit-book/:_id',
    component:BookDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
