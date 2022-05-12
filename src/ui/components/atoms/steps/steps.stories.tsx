import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Steps, StepsProps, StepsSelectParams } from './steps';

const items = [
  {
    label: 'Personal',
    command: (event: StepsSelectParams) => {
      console.log(event.item.label);
    },
  },
  {
    label: 'Seat',
    command: (event: StepsSelectParams) => {
      console.log(event.item.label);
    },
  },
  {
    label: 'Payment',
    command: (event: StepsSelectParams) => {
      console.log(event.item.label);
    },
  },
  {
    label: 'Confirmation',
    command: (event: StepsSelectParams) => {
      console.log(event.item.label);
    },
  },
];

export default {
  title: 'Atoms/Steps',
  component: Steps,
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (props: StepsProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Steps {...props} />
);

export const Primary = Template.bind({});
Primary.args = {
  model: items,
};

export const Interactive = Template.bind({});
Interactive.args = {
  model: items,
  onSelect: (e) => console.log(e.index),
  readOnly: false,
};
