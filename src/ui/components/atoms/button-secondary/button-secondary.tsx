import React from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from '../button/button';

const StyledButton = styled(Button)`
  width: 100%;
`;

const ButtonSecondary = (props: ButtonProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledButton {...props} className="p-button-secondary justify-content-center p-button-raised" />
);

export { ButtonSecondary };
