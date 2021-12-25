import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthActions} from './action-types';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(AuthActions.login),
                tap(action => {
                    console.log(`In AuthEffect for action: [Login Page] User Login: ${JSON.stringify(action)}`);
                    localStorage.setItem('user', JSON.stringify(action.user));
                })
            )
        ,
        {dispatch: false});

    logout$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(AuthActions.logout),
                tap(action => {
                    console.log(`AuthEffect for action: [Top Menu] Logout: ${JSON.stringify(action)}`);
                    localStorage.removeItem('user');
                    this.router.navigateByUrl('/login');
                })
            )
    , {dispatch: false});

    constructor(private actions$: Actions,
                private router: Router) {

    }
}
