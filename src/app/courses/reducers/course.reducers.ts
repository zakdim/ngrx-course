import {Course} from '../model/course';
import {EntityState} from '@ngrx/entity';

export interface CoursesState extends EntityState<Course> {
    // entities: {[key: number]: Course};
    // ids: number[];
}
