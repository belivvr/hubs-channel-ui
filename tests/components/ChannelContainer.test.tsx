import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen, fireEvent } from '@testing-library/react';

import ChannelContainer, { defaultMessage } from '../../src/components/ChannelContainer';

interface MockSidebarProps {
  title: React.ReactNode;
  beforeTitle: React.ReactNode;
}
interface MockCloseButtonProps {
  onClick: () => void;
}

function MockSidebar({ title, beforeTitle }: MockSidebarProps) {
  return (
    <>
      {beforeTitle}
      <br />
      {title}
    </>
  )
}
function MockCloseButton({ onClick }: MockCloseButtonProps) {
  return <button onClick={onClick}>close button</button>
}

interface Props {
  onClose: () => void;
  locale?: string;
  messages?: Record<string, string>;
  children?: React.ReactNode;
}

function renderChannelContainer({
  onClose,
  children,
  locale = 'en',
  messages,
}: Props) {
  return render(
    <IntlProvider locale={locale} messages={messages}>
      <ChannelContainer
        Sidebar={MockSidebar}
        CloseButton={MockCloseButton}
        onClose={onClose}
      >
        {children}
      </ChannelContainer>
    </IntlProvider>,
  );
}

describe('ChannelContainer', () => {
  context('When not provided language', () => {
    it('Should renders default message', () => {
      renderChannelContainer({ onClose: () => {} });

      expect(screen.getByText(defaultMessage)).toBeInTheDocument();
    });
  });

  context('When provided language', () => {
    const givenLocale = 'ko';
    const givenMessage = '채널';
    const givenMessages = {
      'channel-sidebar.title': givenMessage,
    };

    it('Should renders provided message', () => {
      renderChannelContainer({ onClose: () => {}, locale: givenLocale, messages: givenMessages });

      expect(screen.getByText(givenMessage)).toBeInTheDocument();
    });
  });

  context('When click button', () => {
    const handleClose = jest.fn();

    it('Should be calls onClose', () => {
      renderChannelContainer({ onClose: handleClose });

      expect(handleClose).not.toBeCalled();

      fireEvent.click(screen.getByRole('button'));

      expect(handleClose).toBeCalled();
    })
  });
});