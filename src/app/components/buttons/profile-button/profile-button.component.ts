import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {toast} from "shared/functions/toast";
import {AuthService} from "shared/services/auth.service";
import {StorageService} from "shared/services/storage.service";
import {LoginComponent} from "src/app/modals/login/login.component";
import {RegisterComponent} from "src/app/modals/register/register.component";

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent {
  constructor(private readonly storageService: StorageService,
              private readonly authService: AuthService,
              private readonly router:Router,
              private readonly dialog: MatDialog) {
  }

  user: any = this.storageService.user || false;

  /*  buttons = [
        {
          id: 1,
          title: 'Войти',
          title_kk: '',
          icon: 'login',
          show: !this.user,
          action: () => this.login()
        },
        {
          id: 2,
          title: 'Регистрация',
          title_kk: '',
          icon: 'login',
          show: !this.user,
          action: () => this.register()
        },
        {
          id: 3,
          title: 'Контакты',
          title_kk: '',
          icon: 'contacts',
          show: this.user,
          action: () => this.register()
        },
        {
          id: 4,
          title: 'Мои заказы',
          title_kk: '',
          icon: 'list_alt',
          show: this.user,
          action: () => true
        },
      ]*/

  // Вход
  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '360px',
      maxHeight: '250px'
    });

    dialogRef.afterClosed().subscribe((user: any) => {
      if (user) {
        this.user = user;
        this.storageService.user = user;
      }
    });
  }

  // Регистрация
  register(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '360px',
      maxHeight: '250px'
    });

    dialogRef.afterClosed().subscribe((user: any) => {
      if (user) {
        this.user = user;
        this.storageService.user = user;
      }
    });
  }

  logout(): void {
    this.user = null;
    this.authService.logout();
    toast('success','Вы вышли из аккаунта');
  }

  toOrderPage() {
    this.router.navigate(['/order']).then();
  }
}
