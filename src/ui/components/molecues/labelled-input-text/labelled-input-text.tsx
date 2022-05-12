/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  InputText, InputTextProps,
} from 'ui/components/atoms';
import { LabelInput, LabelInputProps } from '../label-input/label-input';

export type LabelledInputTextProps = InputTextProps & LabelInputProps

const LabelledInputText = (props: LabelledInputTextProps) => (
  <LabelInput {...props}>
    <InputText {...props} />
  </LabelInput>
);

export { LabelledInputText };
