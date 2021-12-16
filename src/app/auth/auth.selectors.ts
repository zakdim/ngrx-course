import {createSelector} from '@ngrx/store';
import {authFeatureKey} from './reducers';

export const isLoggedIn = createSelector(
    state => state[authFeatureKey],
    (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);
