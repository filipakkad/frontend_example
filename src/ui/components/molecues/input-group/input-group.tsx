/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  InputText, InputTextProps,
} from 'ui/components/atoms';

export type InputGroupProps = InputTextProps & {
  start?: JSX.Element;
  end?: JSX.Element;
}

const InputGroup = (props: InputGroupProps) => {
  const { start, end } = props;
  return (
    <div className="p-inputgroup">
      {start ? (
        <span className="p-inputgroup-addon">
          {start}
        </span>
      ) : null}
      <InputText {...props} />
      {end ? (
        <span className="p-inputgroup-addon">
          {end}
        </span>
      ) : null}
    </div>
  );
};

export { InputGroup };
