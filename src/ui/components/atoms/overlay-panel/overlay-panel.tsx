import React from 'react';
import { OverlayPanel as PrimereactOverlayPanel, OverlayPanelProps as PrimereactOverlayPanelProps } from 'primereact/overlaypanel';

export type OverlayPanelProps = PrimereactOverlayPanelProps;

const OverlayPanel = (props: OverlayPanelProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactOverlayPanel {...props} />
);
export { OverlayPanel };
