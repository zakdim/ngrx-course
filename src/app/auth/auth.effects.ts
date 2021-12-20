import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthActions} from './action-types';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(AuthActions.login),
                tap(action => {
                    console.log('AuthEffect for action: [Login Page] User Login');
                    localStorage.setItem('user', JSON.stringify(action.user));
                })
            )
        ,
        {dispatch: false});

    constructor(private actions$: Actions) {

    }
}
