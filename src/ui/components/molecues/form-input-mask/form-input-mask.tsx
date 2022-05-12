import React, { useCallback } from 'react';
import { UseControllerProps } from 'react-hook-form';
import { LabelledInputMask, LabelledInputMaskProps } from '../labelled-input-mask/labelled-input-mask';
import { FormInput } from '../form-input/form-input';

const FormInputMask = < InputFormType, >(
  props: LabelledInputMaskProps & UseControllerProps<InputFormType>,
) => {
  const ChildComponent = useCallback(LabelledInputMask, [props]);
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

export { FormInputMask };
