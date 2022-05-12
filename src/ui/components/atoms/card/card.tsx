import React from 'react';
import { Card as PrimereactCard, CardProps as PrimereactCardProps } from 'primereact/card';

export type CardProps = PrimereactCardProps;

const Card = (props: CardProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactCard {...props} />
);

export { Card };
