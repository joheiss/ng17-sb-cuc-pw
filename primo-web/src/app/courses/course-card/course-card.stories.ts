import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';
import { CourseCardComponent } from './course-card.component';

const meta: Meta<CourseCardComponent> = {
  title: 'Courses/Course Card',
  component: CourseCardComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args: CourseCardComponent) => ({
    props: {
      ...args,
    },
    template: `<app-course-card ${argsToTemplate(args)}></app-course-card>`,
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<CourseCardComponent>;

export const Basic: Story = {
  args: {
    course: {
      id: 1,
      description: "Angular Core Deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      lessonsCount: 10,
      category: 'INTERMEDIATE'
    },
  },
};
