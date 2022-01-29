// https://testing-library.com/docs/react-testing-library/setup#custom-render

import { render, RenderOptions, RenderResult } from '@testing-library/react';
// import defaultStrings from 'i18n/en-x-default';
// import { TranslationProvider } from 'my-i18n-lib';
// import { ThemeProvider } from 'my-ui-lib';
import React, { ReactElement } from 'react';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <>
    {/* <ThemeProvider theme="light">
      <TranslationProvider messages={defaultStrings}>{children}</TranslationProvider>
    </ThemeProvider> */}
    {children}
  </>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
