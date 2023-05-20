import {Component} from '@angular/core';
import {MainService} from "src/app/pages/main/main.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  contents: any[] = [];
  constructor(private readonly mainsService: MainService) {
  }

  ngOnInit() {
    this.mainsService.getContents().subscribe(res => {
      console.log(res);
      this.contents = res.data;
    })
  }
}
