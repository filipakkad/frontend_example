import React, { useCallback } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { LabelledInputNumber, LabelledInputNumberProps } from '../labelled-input-number/labelled-input-number';
import { FormInput } from '../form-input/form-input';

const FormInputNumber = < InputFormType, >(
  props: LabelledInputNumberProps & UseControllerProps<InputFormType>,
) => {
  const ChildComponent = useCallback(LabelledInputNumber, [props]);
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

export { FormInputNumber };
