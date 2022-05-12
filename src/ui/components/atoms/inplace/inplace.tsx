import React from 'react';
import {
  Inplace as PrimereactInplace,
  InplaceProps as PrimereactInplaceProps,
  InplaceDisplay as PrimereactInplaceDisplay,
  InplaceContent as PrimereactInplaceContent,
} from 'primereact/inplace';

export type InplaceProps = PrimereactInplaceProps;

const Inplace = (props: InplaceProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactInplace {...props} />
);

const InplaceDisplay = (props: InplaceProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactInplaceDisplay {...props} />
);

const InplaceContent = (props: InplaceProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactInplaceContent {...props} />
);
export { Inplace, InplaceDisplay, InplaceContent };
