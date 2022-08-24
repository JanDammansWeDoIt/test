import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@lib/services';
import { Store } from '@ngrx/store';
import { next } from '../../../store/actions/navigation-actions';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  private readonly _callbackURL: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _store: Store
  ) {
    this._callbackURL = this._activatedRoute.snapshot.queryParamMap.get('callbackURL') || '/';
  }

  onClickSignIn(): void {
    this._authService.login();
    this._store.dispatch(next({ url: this._callbackURL }));
  }
}
