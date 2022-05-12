import React from 'react';
import { Dropdown as PrimereactDropdown, DropdownProps as PrimereactDropdownProps } from 'primereact/dropdown';

export type DropdownProps = PrimereactDropdownProps;

const Dropdown = (props: DropdownProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactDropdown {...props} />
);
export { Dropdown };
