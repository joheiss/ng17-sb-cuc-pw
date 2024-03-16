import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../course.interface';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course?: Course;
}
