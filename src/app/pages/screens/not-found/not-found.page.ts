import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { next } from '../../../store/actions/navigation-actions';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.css'],
})
export class NotFoundPage {
  constructor(private _store: Store) {}

  goToHome() {
    this._store.dispatch(next({ url: '/' }));
  }
}
