import { createSelector } from '@ngrx/store';

import { navigationFeature } from '../reducers/navigation-reducers';

export const selectNavHistory = createSelector(
    navigationFeature.selectNavigationHistory,
    (routes,) => ({ routes })
);