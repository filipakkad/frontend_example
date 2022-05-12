import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RegistrationForm } from './registration-form';

export default {
  title: 'Organisms/RegistrationForm',
  component: RegistrationForm,
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = () => (
  <RegistrationForm />
);

export const Primary = Template.bind({});
