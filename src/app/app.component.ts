import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(private readonly http: HttpClient) {
  }

  test() {
    this.http.get('/api/books').subscribe(res => console.log(res));
  }
}
