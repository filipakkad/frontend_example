import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menubar, MenubarProps } from './menubar';

export default {
  title: 'Atoms/Menubar',
  component: Menubar,
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof Menubar>;

const Template: ComponentStory<typeof Menubar> = (props: MenubarProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Menubar {...props} />
);

export const Small = Template.bind({});
