import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import { defaultDialogConfig } from "../shared/default-dialog-config";
import { compareCourses, Course } from "../model/course";
import { AppState } from "../../reducers";
import {
    selectAdvancedCourses,
    selectBeginnerCourses,
    selectPromoTotal,
} from "../courses.selectors";
import { EditCourseDialogComponent } from "../edit-course-dialog/edit-course-dialog.component";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor(private dialog: MatDialog,
                private store: Store<AppState>) {}

    ngOnInit() {
        this.reload();
    }

    reload() {
        this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

        this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

        this.promoTotal$ = this.store.pipe(select(selectPromoTotal));
    }

    onAddCourse() {
        const dialogConfig = defaultDialogConfig();

        dialogConfig.data = {
            dialogTitle: "Create Course",
            mode: "create",
        };

        this.dialog.open(EditCourseDialogComponent, dialogConfig);
    }
}
