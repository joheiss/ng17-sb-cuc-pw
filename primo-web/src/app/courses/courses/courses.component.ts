import { Component } from '@angular/core';
import { COURSES } from '../../../../../primo-data/db-data';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseCardInputSignalComponent } from '../course-card-input-signal/course-card-input-signal.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent, CourseCardInputSignalComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses = COURSES;

}
