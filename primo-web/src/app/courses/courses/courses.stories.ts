import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';
import { CoursesComponent } from './courses.component';

const meta: Meta<CoursesComponent> = {
  title: 'Courses/Courses',
  component: CoursesComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

type Story = StoryObj<CoursesComponent>;

export const Basic: Story = {};
