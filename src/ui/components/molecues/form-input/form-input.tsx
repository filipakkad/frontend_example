import React from 'react';
import {
  useController, UseControllerProps,
} from 'react-hook-form';

type FormInputProps<ChildPropsType, FormInputType> = ChildPropsType &
  UseControllerProps<FormInputType> & {
    isCheckBox?: boolean,
    ChildComponent: (props: ChildPropsType) => JSX.Element
  }

const FormInput = <ChildPropsType, FormInputType>(
  props: FormInputProps<ChildPropsType, FormInputType>,
) => {
  const {
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
    isCheckBox,
    ChildComponent,
    ...childProps
  } = props;

  const { field } = useController({
    name, rules, shouldUnregister, control, defaultValue,
  });

  const {
    onBlur, onChange, name: fieldName, value,
  } = field;

  return (
    <ChildComponent
      name={fieldName}
      value={isCheckBox ? undefined : value}
      checked={isCheckBox ? value : undefined}
      onChange={onChange}
      onBlur={onBlur}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...childProps as Extract<typeof childProps, ChildPropsType>}
    />
  );
};

export { FormInput };
