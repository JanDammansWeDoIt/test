import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from '@env/environment';
import { navigationFeature } from './store/reducers/navigation-reducers';
import { EffectsModule } from '@ngrx/effects';
import { NavigationEffects } from './store/effects/navigation-effects';

@NgModule({
  declarations: [],
  imports: [
    AsyncPipe,
    StoreModule.forFeature(navigationFeature),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([NavigationEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [],
  exports: [],
})
export class AppModule {}
