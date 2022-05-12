import React from 'react';
import { Steps as PrimereactSteps, StepsProps as PrimereactStepsProps, StepsSelectParams as PrimereactStepsSelectParams } from 'primereact/steps';

export type StepsProps = PrimereactStepsProps
export type StepsSelectParams = PrimereactStepsSelectParams;

const Steps = (props: StepsProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <PrimereactSteps {...props} />
);
export { Steps };
