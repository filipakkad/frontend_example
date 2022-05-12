import React from 'react';

const Icon = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const {
    className,
    ...otherProps
  } = props;

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <i {...otherProps} className={`pi ${className}`} />
  );
};

export { Icon };
