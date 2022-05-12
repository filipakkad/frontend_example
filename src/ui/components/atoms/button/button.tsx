import React from 'react';
import { Button as PrimereactButton, ButtonProps as PrimereactCardProps } from 'primereact/button';

export type ButtonProps = PrimereactCardProps;

const Button = (props: ButtonProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactButton {...props} />
);

export { Button };
