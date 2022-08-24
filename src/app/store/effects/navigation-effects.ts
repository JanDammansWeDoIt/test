import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { navigationFeature } from '../reducers/navigation-reducers';
import { Injectable } from '@angular/core';
import { AuthService } from '@lib/services';

@Injectable()
export class NavigationEffects {
  navigateToNextPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Navigation Component] next'),
        switchMap((action: any) => {
          return this.router.navigate([action.url.toString()]);
        }),
      ),
    { dispatch: false },
  );

  navigateToPrevPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Navigation Component] prev'),
        switchMap(() => {
          const state = this._store.select(navigationFeature.selectNavigationHistory) as any;
          let routes: Array<string> = [];
          state.forEach((routeArray: Array<string>) => {
            routes = routeArray;
          });
          console.log('prev');
          if (routes[routes.length - 1] == undefined) return this.router.navigate(['/']);

          if (routes[routes.length - 1] === '/auth/login') {
            this._authService.logout();
            return this.router.navigate(['/auth/login']);
          }
          return this.router.navigate([routes[routes.length - 1]]);
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private _store: Store,
    private _authService: AuthService,
  ) {}
}
