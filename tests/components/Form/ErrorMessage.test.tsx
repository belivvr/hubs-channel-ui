import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import ErrorMessage from '../../../src/components/Form/ErrorMessage';

interface Props {
  locale?: string;
  messages?: Record<string, string>;
  visible?: boolean;
}
function renderErrorMessage({
  locale = 'en',
  messages,
  visible = false,
}: Props) {
  render(
    <IntlProvider locale={locale} messages={messages}>
      <ErrorMessage visible={visible} />
    </IntlProvider>
  );
}

describe('ErrorMessage', () => {
  context('When is visible', () => {
    it('Should renders display block', () => {
      renderErrorMessage({ visible: true });
  
      expect(screen.getByText('This channel does not exist').getAttribute('style').includes('block')).toBeTruthy();
    });
  });

  context('When is not visible', () => {
    it('Should renders display none', () => {
      renderErrorMessage({ visible: false });
  
      expect(screen.getByText('This channel does not exist').getAttribute('style').includes('none')).toBeTruthy();
    });
  });
});
