import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../course.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card-input-signal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './course-card-input-signal.component.html',
  styleUrl: './course-card-input-signal.component.scss'
})
export class CourseCardInputSignalComponent {
  course = input.required<Course>();

  getAvatar() {
    return { "background-image": "url(`${course.imageUrl}`);" };
  }

}
