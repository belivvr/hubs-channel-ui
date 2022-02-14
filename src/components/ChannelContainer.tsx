import React from 'react';
import { FormattedMessage } from 'react-intl';

interface Props {
  Sidebar: React.FunctionComponent<{
    title: React.ReactNode;
    beforeTitle: React.ReactNode;
    [key: string]: any;
  }>;
  CloseButton: React.FunctionComponent<{
    onClick: () => void;
    [key: string]: any;
  }>;
  onClose: () => void;
  children: React.ReactNode;
}

export const defaultMessage = 'Channels';

export default function ChannelContainer({
  Sidebar, CloseButton, onClose, children,
}: Props) {
  return (
    <Sidebar
      title={<FormattedMessage id="channel-sidebar.title" defaultMessage={defaultMessage} />}
      beforeTitle={<CloseButton onClick={onClose} />}
    >
      {children}
    </Sidebar>
  );
}
