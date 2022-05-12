/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Dropdown, DropdownProps,
} from 'ui/components/atoms';
import { LabelInput, LabelInputProps } from '../label-input/label-input';

export type LabelledDropdownProps = DropdownProps & LabelInputProps

const LabelledDropdown = (props: LabelledDropdownProps) => (
  <LabelInput {...props}>
    <Dropdown {...props} />
  </LabelInput>
);

export { LabelledDropdown };
