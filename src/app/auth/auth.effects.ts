import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions) {

        actions$.subscribe(action => {
            if (action.type === '[Login Page] User Login') {
                console.log('AuthEffect for action: [Login Page] User Login');
                localStorage.setItem('user', JSON.stringify(action['user']));
            }
        });
    }
}
