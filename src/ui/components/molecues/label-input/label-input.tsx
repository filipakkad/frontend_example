import React from 'react';
import styled from 'styled-components';

export interface LabelInputProps {
  id: string;
  label: string;
  children?: React.ReactNode
}

const Span = styled.span`
  font-size: small;
`;

const LabelInput = (props: LabelInputProps) => {
  const {
    id, label, children,
  } = props;

  return (
    <div className="field">
      <Span className="p-float-label">
        {children}
        <label htmlFor={id}>
          {label}
        </label>
      </Span>
    </div>
  );
};

export { LabelInput };
