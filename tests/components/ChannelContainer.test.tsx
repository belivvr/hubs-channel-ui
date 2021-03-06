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
  onClick?: () => void;
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
  onClickPrivateChannelButton?: (channel: string) => void;
  locale?: string;
  messages?: Record<string, string>;
  data?: ChannelProps[];
  usePrivateChannel?: boolean;
  children?: React.ReactNode;
}

function renderChannelContainer({
  onClose,
  onClickPrivateChannelButton,
  locale = 'en',
  messages,
  data = [],
  usePrivateChannel,
}: Props) {
  return render(
    <IntlProvider locale={locale} messages={messages}>
      <ChannelContainer
        Sidebar={MockSidebar}
        CloseButton={MockCloseButton}
        usePrivateChannel={usePrivateChannel}
        onClose={onClose}
        onClickPrivateChannelButton={onClickPrivateChannelButton}
        data={data}
      />
    </IntlProvider>,
  );
}

describe('ChannelContainer', () => {
  context('When not provided language', () => {
    it('Should renders default message', () => {
      renderChannelContainer({ onClickPrivateChannelButton: (channel: string) => { console.log(channel) } });

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
      'channel-sidebar-container.error-message': '존재하지 않는 채널입니다.',
    };

    it('Should renders provided message', () => {
      renderChannelContainer({ locale: givenLocale, messages: givenMessages });

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
      renderChannelContainer({ 
        usePrivateChannel: true,
        onClickPrivateChannelButton: handleClickPrivateChannelButton,
      });

      expect(handleClickPrivateChannelButton).not.toBeCalled();

      fireEvent.click(screen.getByText('Entrance'));

      expect(handleClickPrivateChannelButton).toBeCalled();
    });
  });

  it('is for coverage', () => {
    renderChannelContainer({ usePrivateChannel: true });
    fireEvent.click(screen.getByText('Entrance'));
  });
});