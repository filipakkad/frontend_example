import React from 'react';
import { InputNumber as PrimereactInputNumber, InputNumberProps as PrimereactInputNumberProps } from 'primereact/inputnumber';

export type InputNumberProps = PrimereactInputNumberProps;

const InputNumber = (props: InputNumberProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactInputNumber {...props} />
);
export { InputNumber };
