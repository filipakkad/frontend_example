import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputMask, InputMaskProps } from './input-mask';

export default {
  title: 'Atoms/InputMask',
  component: InputMask,
  argTypes: {
    className: { control: { disable: true } },
  },
  args: {
    value: 'Hello',
    tooltip: 'Example tooltip',
  },
} as ComponentMeta<typeof InputMask>;

const Template: ComponentStory<typeof InputMask> = (props: InputMaskProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <InputMask {...props} />
);

export const Pesel = Template.bind({});
Pesel.args = {
  mask: '99999999999',
  tooltip: 'Numer PESEL',
};
