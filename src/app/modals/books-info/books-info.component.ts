import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-books-info',
  templateUrl: './books-info.component.html',
  styleUrls: ['./books-info.component.scss']
})
export class BooksInfoComponent {
  constructor(private readonly dialogRef: MatDialogRef<BooksInfoComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { books: any },) {
  }

  books = this.data.books;

  close(value?: any): void {
    this.dialogRef.close(value);
  }
}
