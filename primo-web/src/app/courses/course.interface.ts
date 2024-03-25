export type CourseCategory = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

export interface Course {
  id: number;
  description: string;
  iconUrl?: string;
  longDescription?: string;
  lessonsCount?: number;
  category?: CourseCategory;
}
