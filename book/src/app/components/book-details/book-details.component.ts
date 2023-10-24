import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  getId: any;
  updateForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activateRoute: ActivatedRoute,
    private crudApi: CrudService
  ) {
    this.getId = this.activateRoute.snapshot.paramMap.get('_id');
    this.crudApi.getBook(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        name: res['name'],
        price: res['price'],
        description: res['description'],
      });
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }
  ngOnInit(): void {}
  onUpdate() {
    this.crudApi.updateBook(this.getId, this.updateForm.value).subscribe(
      (res) => {
        this.ngZone.run(() => {
          this.router.navigateByUrl('/books-list');
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
