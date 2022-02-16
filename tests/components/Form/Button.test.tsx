import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import Button from '../../../src/components/Form/Button';

interface Props {
  locale?: string;
  messages?: Record<string, string>;
  onClick?: () => void;
}
function renderButton({
  locale = 'en',
  messages,
  onClick = () => {},
}: Props) {
  render(
    <IntlProvider locale={locale} messages={messages}>
      <Button onClick={onClick} />
    </IntlProvider>
  )
}

describe('Button', () => {
  context('When click', () => {
    const handleClick: jest.Mock = jest.fn();

    it('Should be calls given onClick function', () => {
      renderButton({ onClick: handleClick });

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByRole('button'));

      expect(handleClick).toBeCalled();
    });
  });

  context('When provided language', () => {
    const givenLocale = 'ko';
    const givenMessage = '채널입장';
    const givenMessages = {
      'channel-sidebar-container.entrance-button': givenMessage,
    };

    it('Should renders provided message', () => {
      renderButton({ locale: givenLocale, messages: givenMessages });

      expect(screen.getByText(givenMessage)).toBeInTheDocument();
    });
  });

  context('When mouse hover', () => {
    it('Should button test coverage 100%', () => {
      renderButton({});

      fireEvent.mouseEnter(screen.getByRole('button'));
      fireEvent.mouseLeave(screen.getByRole('button'));
    });
  });
});
