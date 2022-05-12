import pl from '../translation/pl.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'pl';
    resources: {
      pl: typeof pl.common
    };
  }
}
