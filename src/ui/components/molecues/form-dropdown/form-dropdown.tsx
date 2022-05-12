import React, { useCallback } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { LabelledDropdown, LabelledDropdownProps } from '../labelled-dropdown/labelled-dropdown';
import { FormInput } from '../form-input/form-input';

const FormDropdown = < InputFormType, >(
  props: LabelledDropdownProps & UseControllerProps<InputFormType>,
) => {
  const ChildComponent = useCallback(LabelledDropdown, [props]);
  const { id } = props;

  return (
    <FormInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      id={id}
      style={{ width: '100%' }}
      ChildComponent={ChildComponent}
    />
  );
};

export { FormDropdown };
