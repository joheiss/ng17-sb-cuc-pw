import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';
import { CourseCardsComponent } from './course-cards.component';

const meta: Meta<CourseCardsComponent> = {
  title: 'Courses/Course Cards',
  component: CourseCardsComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args: CourseCardsComponent) => ({
    props: {
      ...args,
    },
    template: `<app-course-cards ${argsToTemplate(args)}></app-course-cards>`,
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<CourseCardsComponent>;

export const Basic: Story = {
  args: {
    courses: [
      {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        lessonsCount: 10,
        category: 'INTERMEDIATE'
      },
      {
        id: 2,
        description: "RxJs In Practice Course",
        // iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 10
      },
      {
        id: 3,
        description: 'NgRx In Depth',
        longDescription: "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        category: 'ADVANCED'
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    courses: [],
  },
};
