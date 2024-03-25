import { Component, Input } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../course.interface';

@Component({
  selector: 'app-course-cards',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-cards.component.html',
  styleUrl: './course-cards.component.scss'
})
export class CourseCardsComponent {
  @Input({ required: true }) courses: Course[] = [];
}
