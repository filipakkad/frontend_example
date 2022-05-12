import React from 'react';
import { InputText as PrimereactInputText, InputTextProps as PrimereactInputTextProps } from 'primereact/inputtext';

export type InputTextProps = PrimereactInputTextProps;

const InputText = (props: InputTextProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactInputText {...props} />
);
export { InputText };
