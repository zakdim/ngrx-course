import { Injectable } from "@angular/core";
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory,
} from "@ngrx/data";

import { Course } from "../model/course";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {
    constructor(serviceElementsFactor: EntityCollectionServiceElementsFactory) {
        super("Course", serviceElementsFactor);
    }
}
