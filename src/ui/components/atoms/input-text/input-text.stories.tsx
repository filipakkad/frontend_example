import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText, InputTextProps } from './input-text';

export default {
  title: 'Atoms/InputText',
  component: InputText,
  argTypes: {
    className: { control: { disable: true } },
  },
  args: {
    value: 'Hello',
    tooltip: 'Example tooltip',
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (props: InputTextProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <InputText {...props} />
);

export const Small = Template.bind({});
Small.args = {
  className: 'p-inputtext-sm',
};

export const Normal = Template.bind({});
Normal.args = {
  className: 'p-inputtext',
};
