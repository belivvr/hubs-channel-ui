import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import Input from '../../../src/components/Form/Input';

interface Props {
  locale?: string;
  messages?: Record<string, string>;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: (focus: boolean) => void;
}
function renderInput({
  locale = 'en',
  messages,
  value = '',
  onChange = () => {},
  onFocus = () => {},
}: Props) {
  render(
    <IntlProvider locale={locale} messages={messages}>
      <Input value={value} onChange={onChange} onFocus={onFocus} />
    </IntlProvider>
  )
}

describe('Input', () => {
  context('When changed value', () => {
    const handleChange: jest.Mock = jest.fn();
    const givenValue: string = 'private channel name';

    it('Should be calls given onChange function', () => {
      renderInput({ onChange: handleChange });

      expect(handleChange).not.toBeCalled();

      fireEvent.change(screen.getByRole('textbox'), { target: { value: givenValue } });

      expect(handleChange).toBeCalled();
    });
  });

  context('When provided language', () => {
    const givenLocale = 'ko';
    const givenMessage = '프라이빗 채널 이름을 입력하세요';
    const givenMessages = {
      'channel-sidebar-container.input-placeholder.private-channel': givenMessage,
    };

    it('Should renders provided message', () => {
      renderInput({ locale: givenLocale, messages: givenMessages });

      expect(screen.getByPlaceholderText(givenMessage)).toBeInTheDocument();
    });
  });

  context('When focus', () => {
    const handleFocus: jest.Mock = jest.fn();

    it('Should be calls given onFocus function', () => {
      renderInput({ onFocus: handleFocus });

      expect(handleFocus).not.toBeCalled();

      fireEvent.focus(screen.getByRole('textbox'));

      expect(handleFocus).toBeCalled();
    });
  });

  context('When blur', () => {
    const handleFocus: jest.Mock = jest.fn();

    it('Should be calls given onFocus function', () => {
      renderInput({ onFocus: handleFocus });

      expect(handleFocus).not.toBeCalled();

      fireEvent.blur(screen.getByRole('textbox'));

      expect(handleFocus).toBeCalled();
    });
  });
});
