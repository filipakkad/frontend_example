/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  InputNumber, InputNumberProps,
} from 'ui/components/atoms';
import { LabelInput, LabelInputProps } from '../label-input/label-input';

export type LabelledInputNumberProps = InputNumberProps & LabelInputProps

const LabelledInputNumber = (props: LabelledInputNumberProps) => (
  <LabelInput {...props}>
    <InputNumber {...props} />
  </LabelInput>
);

export { LabelledInputNumber };
