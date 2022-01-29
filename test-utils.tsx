// https://testing-library.com/docs/react-testing-library/setup#custom-render

import { render, RenderOptions } from '@testing-library/react';
// import defaultStrings from 'i18n/en-x-default';
// import { TranslationProvider } from 'my-i18n-lib';
// import { ThemeProvider } from 'my-ui-lib';
import React, { FC, ReactElement } from 'react';

const AllTheProviders: FC = ({ children }) => (
  <>
    {/* <ThemeProvider theme="light">
    <TranslationProvider messages={defaultStrings}>{children}</TranslationProvider>
  </ThemeProvider> */}
    {children}
  </>
);

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
