import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LocationComponent} from "src/app/modals/location/location.component";

@Component({
  selector: 'app-location-button',
  templateUrl: './location-button.component.html',
  styleUrls: ['./location-button.component.scss']
})
export class LocationButtonComponent {
  constructor(private dialog: MatDialog) {
  }

  openLocation(): void {
    const dialogRef = this.dialog.open(LocationComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '360px',
      maxHeight: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }
}
