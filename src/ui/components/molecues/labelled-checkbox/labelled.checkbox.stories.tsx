import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelledCheckbox } from './labelled-checkbox';

export default {
  title: 'Molecues/LabelledCheckbox',
  component: LabelledCheckbox,
  argTypes: {
    className: { control: { disable: true } },
  },
  args: {
    inputId: 'Example',
    label: 'Example checkbox',
  },
} as ComponentMeta<typeof LabelledCheckbox>;

const Template: ComponentStory<typeof LabelledCheckbox> = (props) => {
  const [checked, setChecked] = useState(false);
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <LabelledCheckbox {...props} checked={checked} onChange={(e) => setChecked(e.checked)} />
  );
};

export const Primary = Template.bind({});
