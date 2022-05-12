import React from 'react';
import { Dialog as PrimereactDialog, DialogProps as PrimereactDialogProps } from 'primereact/dialog';

export type DialogProps = PrimereactDialogProps;

const Dialog = (props: DialogProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactDialog {...props} />
);
export { Dialog };
