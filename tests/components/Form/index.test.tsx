import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import Form from '../../../src/components/Form';

interface Props {
  locale?: string;
  messages?: Record<string, string>;
  value?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
}
function renderForm({
  locale = 'en',
  messages,
  value = '',
  onChange = () => {},
  onClick = () => {},
}: Props) {
  render(
    <IntlProvider locale={locale} messages={messages}>
      <Form value={value} onChange={onChange} onClick={onClick} />
    </IntlProvider>
  );
}

test('Form renders well', () => {
  renderForm({});
});
