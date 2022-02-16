import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Input from './Input';

interface Props {
  Sidebar: React.FunctionComponent<{
    title?: React.ReactNode;
    beforeTitle?: React.ReactNode;
    [key: string]: any;
  }>;
  CloseButton: React.FunctionComponent<{
    onClick?: () => void;
    [key: string]: any;
  }>;
  onClose: () => void;
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
  Sidebar, CloseButton, onClose,
}: Props): JSX.Element {
  const [value, setValue] = useState<string>('');

  return (
    <Sidebar
      title={<FormattedMessage id="channel-sidebar.title" defaultMessage={defaultMessage} />}
      beforeTitle={<CloseButton onClick={onClose} />}
    >
      <Input value={value} onChange={setValue} />
    </Sidebar>
  );
}
