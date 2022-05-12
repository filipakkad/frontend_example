import React, { useCallback } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { LabelledCheckbox, LabelledCheckboxProps } from '../labelled-checkbox/labelled-checkbox';
import { FormInput } from '../form-input/form-input';

const FormCheckbox = < InputFormType, >(
  props: LabelledCheckboxProps & UseControllerProps<InputFormType>,
) => {
  const ChildComponent = useCallback(LabelledCheckbox, [props]);
  const { inputId } = props;
  return (
    <FormInput
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      inputId={inputId}
      isCheckBox
      ChildComponent={ChildComponent}
    />
  );
};

export { FormCheckbox };
