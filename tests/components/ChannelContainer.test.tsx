import React from 'react';
import { IntlProvider } from 'react-intl';
import { render, screen, fireEvent } from '@testing-library/react';

import ChannelContainer, { defaultMessage } from '../../src/components/ChannelContainer';
import type { Props as ChannelProps } from '../../src/components/Channels/Channel';

interface MockSidebarProps {
  title?: React.ReactNode;
  beforeTitle?: React.ReactNode;
  children?: React.ReactNode;
}
interface MockCloseButtonProps {
  onClick: () => void;
}

function MockSidebar({ title, beforeTitle, children }: MockSidebarProps) {
  return (
    <>
      {beforeTitle}
      <br />
      {title}
      {children}
    </>
  )
}
function MockCloseButton({ onClick }: MockCloseButtonProps) {
  return <button onClick={onClick}>close button</button>
}

interface Props {
  onClose?: () => void;
  onClickPrivateChannelButton?: () => void;
  locale?: string;
  messages?: Record<string, string>;
  data?: ChannelProps[];
  children?: React.ReactNode;
}

function renderChannelContainer({
  onClose,
  onClickPrivateChannelButton,
  children,
  locale = 'en',
  messages,
  data = [],
}: Props) {
  return render(
    <IntlProvider locale={locale} messages={messages}>
      <ChannelContainer
        Sidebar={MockSidebar}
        CloseButton={MockCloseButton}
        onClose={onClose}
        onClickPrivateChannelButton={onClickPrivateChannelButton}
        data={data}
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
      'channel-sidebar-container.entrance-button': '입장',
      'channel-sidebar-container.input-placeholder.private-channel': '프라이빗 채널을 입력하세요.',
    };

    it('Should renders provided message', () => {
      renderChannelContainer({ onClose: () => {}, locale: givenLocale, messages: givenMessages });

      expect(screen.getByText(givenMessage)).toBeInTheDocument();
    });
  });

  context('When click close button', () => {
    const handleClose: jest.Mock = jest.fn();

    it('Should be calls onClose', () => {
      renderChannelContainer({ onClose: handleClose });

      expect(handleClose).not.toBeCalled();

      fireEvent.click(screen.getByText('close button'));

      expect(handleClose).toBeCalled();
    });
  });

  context('When click private channel button', () => {
    const handleClickPrivateChannelButton: jest.Mock = jest.fn();

    it('Should be calls onClickPrivateChannelButton', () => {
      renderChannelContainer({ onClickPrivateChannelButton: handleClickPrivateChannelButton });

      expect(handleClickPrivateChannelButton).not.toBeCalled();

      fireEvent.click(screen.getByText('Entrance'));

      expect(handleClickPrivateChannelButton).toBeCalled();
    });
  });
});