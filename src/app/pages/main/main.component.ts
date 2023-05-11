import {Component} from '@angular/core';
import {BannerComponent} from "src/app/components/banner/banner.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
