import {Component} from '@angular/core';
import {ListenerService} from "shared/services/listener.service";

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss']
})
export class LanguageButtonComponent {
  constructor(private readonly listenerService: ListenerService) {
  }

  current: string = 'Русский'

  setLanguage(lng: string, title: string) {
    this.current = title;
    this.listenerService.currentLng$.next(lng);
  }
}
