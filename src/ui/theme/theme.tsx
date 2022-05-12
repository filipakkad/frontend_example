import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeObject } from './theme-object';

import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

type ITheme = {
  theme: typeof ThemeObject;
};
export type { ITheme };

interface ThemeProps {
  children: JSX.Element;
}

const Theme = (props: ThemeProps) => {
  const { children } = props;

  return (
    <ThemeProvider theme={ThemeObject}>
      {children}
    </ThemeProvider>
  );
};

export { Theme };
