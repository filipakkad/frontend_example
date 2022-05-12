import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VOIVODESHIPS } from 'domain/data';
import { LabelledDropdown } from './labelled-dropdown';

export default {
  title: 'Molecues/LabelledDropdown',
  component: LabelledDropdown,
  argTypes: {
    className: { control: { disable: true } },
  },
  args: {
    id: 'Example',
    label: 'Example label',
  },
} as ComponentMeta<typeof LabelledDropdown>;

const Template: ComponentStory<typeof LabelledDropdown> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <LabelledDropdown {...props} />
);

export const Primary = Template.bind({});
Primary.args = {
  options: Object.keys(VOIVODESHIPS),
};
