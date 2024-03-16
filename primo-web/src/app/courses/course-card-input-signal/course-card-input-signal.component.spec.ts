import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardInputSignalComponent } from './course-card-input-signal.component';

describe('CourseCardComponentInputSignal', () => {
  let component: CourseCardInputSignalComponent;
  let fixture: ComponentFixture<CourseCardInputSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardInputSignalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CourseCardInputSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
