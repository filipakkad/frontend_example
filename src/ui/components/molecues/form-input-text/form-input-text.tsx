import React, { useCallback } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { LabelledInputText, LabelledInputTextProps } from '../labelled-input-text/labelled-input-text';
import { FormInput } from '../form-input/form-input';

const FormInputText = < InputFormType, >(
  props: LabelledInputTextProps & UseControllerProps<InputFormType>,
) => {
  const ChildComponent = useCallback(LabelledInputText, [props]);
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

export { FormInputText };
