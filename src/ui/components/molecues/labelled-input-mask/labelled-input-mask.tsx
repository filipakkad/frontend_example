/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  InputMask, InputMaskProps,
} from 'ui/components/atoms';
import { LabelInput, LabelInputProps } from '../label-input/label-input';

export type LabelledInputMaskProps = InputMaskProps & LabelInputProps

const LabelledInputMask = (props: LabelledInputMaskProps) => (
  <LabelInput {...props}>
    <InputMask className={props.value !== undefined && props.value!.length > 0 ? 'p-filled' : ''} {...props} />
  </LabelInput>
);

export { LabelledInputMask };
