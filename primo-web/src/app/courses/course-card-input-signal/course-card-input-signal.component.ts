import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../course.interface';

@Component({
  selector: 'app-course-card-input-signal',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './course-card-input-signal.component.html',
  styleUrl: './course-card-input-signal.component.scss'
})
export class CourseCardInputSignalComponent {
  course = input.required<Course>();
}
