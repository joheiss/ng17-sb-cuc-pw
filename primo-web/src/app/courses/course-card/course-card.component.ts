import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Course } from '../course.interface';
import { CommonModule } from '@angular/common';
import { HighlightedDirective } from '../../shared/directives/highlighted.directive';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, HighlightedDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() course?: Course;

  getAvatar() {
    return {
      "background-image": `url(${this.course?.iconUrl})`,
      "background- size": "cover",
    }
  };
};
