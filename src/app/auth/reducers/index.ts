import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector, createReducer,
    createSelector,
    MetaReducer, on
} from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthActions} from '../action-types';

export const authFeatureKey = 'auth';

// tslint:disable-next-line:no-empty-interface
export interface AuthState {
    user: User;
}

export const initialAuthState: AuthState = {
    user: undefined
};

export const authReducer = createReducer(

    initialAuthState,

    on(AuthActions.login, (state, action) => {

        // console.log('Calling login reducer');
        //
        // // tslint:disable-next-line:no-debugger
        // debugger;

        return {
            user: action.user
        };
    })
);

