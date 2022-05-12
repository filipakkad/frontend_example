import React from 'react';

const AnimatedDiv = ({ children } : {children: JSX.Element | JSX.Element[]}) => (
  <div className="scalein animation-duration-50">
    {children}
  </div>
);

export { AnimatedDiv };
