import React from 'react';
import { InputMask as PrimereactInputMask, InputMaskProps as PrimereactInputMaskProps } from 'primereact/inputmask';

export type InputMaskProps = PrimereactInputMaskProps

const InputMask = (props: InputMaskProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactInputMask {...props} />
);
export { InputMask };
