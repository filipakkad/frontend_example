import React from 'react';
import { Divider as PrimereactDivider, DividerProps as PrimereactDividerProps } from 'primereact/divider';

export type DividerProps = PrimereactDividerProps;

const Divider = (props: DividerProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactDivider {...props} />
);
export { Divider };
