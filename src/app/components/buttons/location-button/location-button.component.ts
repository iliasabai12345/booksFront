import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DEFAULT_LOCATION} from "shared/constants/constants";
import {StorageService} from "shared/services/storage.service";
import {LocationComponent} from "src/app/modals/location/location.component";

@Component({
  selector: 'app-location-button',
  templateUrl: './location-button.component.html',
  styleUrls: ['./location-button.component.scss']
})
export class LocationButtonComponent {
  constructor(private readonly dialog: MatDialog,
              private readonly storageService: StorageService) {
  }

  currentCity = this.storageService.city || DEFAULT_LOCATION;

  openLocation(): void {
    const dialogRef = this.dialog.open(LocationComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '360px',
      maxHeight: '550px',
      data: {
        currentCity: this.currentCity
      }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      result && (this.currentCity = result);
    });
  }
}
