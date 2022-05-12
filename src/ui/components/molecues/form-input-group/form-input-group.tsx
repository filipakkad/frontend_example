import React, { useCallback } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { InputGroup, InputGroupProps } from '../input-group/input-group';
import { FormInput } from '../form-input/form-input';

const FormInputGroup = < InputFormType, >(
  props: InputGroupProps & UseControllerProps<InputFormType>,
) => {
  const ChildComponent = useCallback(InputGroup, [props]);
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

export { FormInputGroup };
