import {Component} from '@angular/core';
import {StorageService} from "shared/services/storage.service";

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent {
  constructor(private readonly storageService: StorageService) {
  }

  get buttons(): any[] {
    return [
      {
        id: 1, title: 'Войти', title_kk: '', icon: 'login', show: !this.isAuthorized, action: () => {
        }
      },
      {
        id: 2, title: 'Регистрация', title_kk: '', icon: 'logout', show: !this.isAuthorized, action: () => {
        }
      },
      {
        id: 3, title: 'Контакты', title_kk: '', icon: 'contacts', show: true, action: () => {
        }
      },
      {
        id: 4, title: 'Мои заказы', title_kk: '', icon: 'list_alt', show: this.isAuthorized, action: () => {
        }
      },
    ]
  }

  // Проверка на авторизацию пользователя
  get isAuthorized(): boolean {
    return !!this.storageService.user;
  }
}
