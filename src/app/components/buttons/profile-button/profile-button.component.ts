import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StorageService} from "shared/services/storage.service";
import {LoginComponent} from "src/app/modals/login/login.component";

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent {
  constructor(private readonly storageService: StorageService,
              private readonly dialog: MatDialog) {
  }

  buttons: any[] = [
    {id: 1, title: 'Войти', title_kk: '', icon: 'login', show: !this.isAuthorized, action: () => this.login()},
    {
      id: 2,
      title: 'Регистрация',
      title_kk: '',
      icon: 'logout',
      show: !this.isAuthorized,
      action: () => this.register
    },
    {id: 3, title: 'Контакты', title_kk: '', icon: 'contacts', show: true, action: () => this.register},
    {
      id: 4, title: 'Мои заказы', title_kk: '', icon: 'list_alt', show: this.isAuthorized, action: () => {
      }
    },
  ]

  // Проверка на авторизацию пользователя
  get isAuthorized(): boolean {
    return !!this.storageService.user;
  }

  // Вход
  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '360px',
      maxHeight: '250px'
    });
  }

  // Регистрация
  register(): void {

  }
}
