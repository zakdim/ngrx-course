import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {Course} from './model/course';
import {AppState} from '../reducers';
import {finalize, first, tap} from 'rxjs/operators';
import {loadAllCourses} from './course.actions';

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store<AppState>) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> | Promise<any> {

        console.log('CourcesResolver');
        return this.store
            .pipe(
                tap(() => {
                    if (!this.loading) {
                        console.log('CoursesResolver: start loading...');
                        this.loading = true;
                        this.store.dispatch(loadAllCourses());
                    } else {
                        console.log('CoursesResolver: already loading, skipping dispatch');
                    }
                }),
                first(),
                finalize(() => this.loading = false)
            );
    }
}
