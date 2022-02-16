import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import type { Props as ChannelProps } from './Channels/Channel';
import Channels from './Channels';
import Form from './Form';

interface Props {
  Sidebar: React.FunctionComponent<{
    title?: React.ReactNode;
    beforeTitle?: React.ReactNode;
    children?: React.ReactNode;
    [key: string]: any;
  }>;
  CloseButton: React.FunctionComponent<{
    onClick?: () => void;
    [key: string]: any;
  }>;
  data: ChannelProps[];
  usePrivateChannel?: boolean;
  error?: boolean;
  onClose: () => void;
  onClickPrivateChannelButton: (channel: string) => void;
}

export const defaultMessage = 'Channels';

/**
 * @example
 * ```tsx
 * <ChannelContainer
 *   Sidebar={Sidebar}
 *   CloseButton={CloseButton}
 *   onClose={() => this.setSidebar(null)}
 * />
 * ```
 */
export default function ChannelContainer({
  Sidebar,
  CloseButton,
  data,
  usePrivateChannel,
  error,
  onClose,
  onClickPrivateChannelButton,
}: Props): JSX.Element {
  const [value, setValue] = useState<string>('');

  return (
    <Sidebar
      title={<FormattedMessage id="channel-sidebar.title" defaultMessage={defaultMessage} />}
      beforeTitle={<CloseButton onClick={onClose} />}
    >
      <Channels data={data} />
      {usePrivateChannel && (
        <Form
          value={value}
          error={error}
          onChange={setValue}
          onClick={() => onClickPrivateChannelButton(value)}
        />
      )}
    </Sidebar>
  );
}
