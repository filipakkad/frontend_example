import React from 'react';
import { Menubar as PrimereactMenubar, MenubarProps as PrimereactMenubarProps } from 'primereact/menubar';

export type MenubarProps = PrimereactMenubarProps;

const Menubar = (props: MenubarProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactMenubar {...props} />
);
export { Menubar };
