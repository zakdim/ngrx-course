import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
} from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { Course } from "../model/course";
import { EditCourseDialogComponent } from "../edit-course-dialog/edit-course-dialog.component";
import { defaultDialogConfig } from "../shared/default-dialog-config";
import { CourseEntityService } from "../services/course-entity.service";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "courses-card-list",
    templateUrl: "./courses-card-list.component.html",
    styleUrls: ["./courses-card-list.component.css"],
})
export class CoursesCardListComponent implements OnInit {
    @Input()
    courses: Course[];

    @Output()
    courseChanged = new EventEmitter();

    constructor(
        private dialog: MatDialog,
        private courseService: CourseEntityService
    ) {}

    ngOnInit() {}

    editCourse(course: Course) {
        const dialogConfig = defaultDialogConfig();

        dialogConfig.data = {
            dialogTitle: "Edit Course",
            course,
            mode: "update",
        };

        this.dialog
            .open(EditCourseDialogComponent, dialogConfig)
            .afterClosed()
            .subscribe(() => this.courseChanged.emit());
    }

    onDeleteCourse(course: Course) {

        this.courseService.delete(course)
            .subscribe(
                () => console.log("Delete completed"),
                err => console.log("Delete failed", err)
            );
    }
}
