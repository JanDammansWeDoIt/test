import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService, ThemeService } from '@lib/services';
import { AppTheme } from '@lib/services/theme';
import { next } from '../../../store/actions/navigation-actions';
import { Store } from '@ngrx/store';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  currentTheme!: AppTheme | null;
  constructor(private _authService: AuthService, private _themeService: ThemeService, private _store: Store) {}

  onClickSignOut(): void {
    this._authService.logout();
    this._store.dispatch(next({ url: '/auth/login' }));
  }

  handleThemeChange(theme: AppTheme): void {
    this._themeService.setTheme(theme);
  }
}
