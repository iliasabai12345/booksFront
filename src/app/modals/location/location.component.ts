import {DialogRef} from "@angular/cdk/dialog";
import {Component} from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  constructor(private readonly dialogRef: DialogRef<LocationComponent>) {
  }

  close(): void {
    this.dialogRef.close();
  }
}
