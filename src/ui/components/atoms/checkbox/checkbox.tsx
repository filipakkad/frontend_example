import React from 'react';
import { Checkbox as PrimereactCheckbox, CheckboxProps as PrimereactCheckboxProps } from 'primereact/checkbox';

export type CheckboxProps = PrimereactCheckboxProps;

const Checkbox = (props: CheckboxProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactCheckbox {...props} />
);
export { Checkbox };
