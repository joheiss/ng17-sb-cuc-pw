import { Component } from '@angular/core';
import { COURSES } from '../../../../../primo-data/db-data';
import { CourseCardsComponent } from '../course-cards/course-cards.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardsComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses = COURSES;

}
