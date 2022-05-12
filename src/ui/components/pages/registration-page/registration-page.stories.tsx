import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegistrationPage } from './registration-page';

export default {
  title: 'Pages/RegistrationPage',
  component: RegistrationPage,
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof RegistrationPage>;

const Template: ComponentStory<typeof RegistrationPage> = () => (
  <RegistrationPage />
);

export const Primary = Template.bind({});
