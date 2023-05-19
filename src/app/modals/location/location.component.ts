import {HttpClient} from "@angular/common/http";
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StorageService} from "shared/services/storage.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  constructor(private readonly dialogRef: MatDialogRef<LocationComponent>,
              private readonly http: HttpClient,
              @Inject(MAT_DIALOG_DATA) private data: { currentCity: any },
              private readonly storageService: StorageService) {
  }

  locations: { title: string, location_id: number }[] = [];
  selectedCity: string | undefined = this.data.currentCity.title;


  ngOnInit(): void {
    this.http.get('/api/locations/getLocations').subscribe((res: any) => {
      this.locations = res.data;
      this.selectedCity = this.storageService.city;
    })
  }

  close(value?: any): void {
    this.dialogRef.close(value);
  }

  selectCity(): void {
    this.storageService.city = this.selectedCity;
    this.close(this.selectedCity);
  }
}
