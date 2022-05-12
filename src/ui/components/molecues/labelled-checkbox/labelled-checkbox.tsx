/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import {
  Checkbox, CheckboxProps,
} from 'ui/components/atoms';

interface LabelProps {
  inputId: string;
  label: string | [string, string];
}

export type LabelledCheckboxProps = CheckboxProps & LabelProps

const Label = styled.label`
  font-size: smaller;
`;

const LabelledCheckbox = (props: LabelledCheckboxProps) => {
  const {
    inputId: id, label, checked, className,
  } = props;

  const labelValue = useMemo(() => {
    if (!Array.isArray(label)) {
      return label;
    }

    return checked ? label[0] : label[1];
  }, [label, checked]);

  return (
    <div className={`field-checkbox ${className}`}>
      <Checkbox {...props} />
      <Label htmlFor={id}>
        {labelValue}
      </Label>
    </div>
  );
};

export { LabelledCheckbox };
