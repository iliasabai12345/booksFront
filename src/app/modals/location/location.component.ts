import {DialogRef} from "@angular/cdk/dialog";
import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from '@angular/core';
import {StorageService} from "shared/services/storage.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  constructor(private readonly dialogRef: DialogRef<LocationComponent>,
              private readonly http: HttpClient,
              private readonly storageService: StorageService) {
  }

  locations: { title: string, location_id: number }[] = [];

  ngOnInit(): void {
    this.http.get('/api/locations/getLocations').subscribe((res: any) => {
      this.locations = res.data;
      console.log(res);
    })
  }

  close(value?: any): void {
    this.dialogRef.close(value);
  }

  selectCity(city: any): void {
    this.storageService.city = city;
    this.close(city);
  }
}
