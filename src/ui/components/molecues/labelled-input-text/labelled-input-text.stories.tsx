import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelledInputText } from './labelled-input-text';

export default {
  title: 'Molecues/LabelledInputText',
  component: LabelledInputText,
  argTypes: {
    className: { control: { disable: true } },
  },
  args: {
    id: 'Example',
    label: 'Example label',
  },
} as ComponentMeta<typeof LabelledInputText>;

const Template: ComponentStory<typeof LabelledInputText> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <LabelledInputText {...props} />
);

export const Small = Template.bind({});
Small.args = {
  className: 'p-inputtext-sm',
};

export const Normal = Template.bind({});
Normal.args = {
  className: 'p-inputtext',
};
