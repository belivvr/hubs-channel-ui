import React from 'react';

import Icon from '../assets/icon.svg';

interface PopoverChildren {
  togglePopover?: any;
  openPopover?: any;
  closePopover?: any;
  popoverVisible?: any;
  triggerRef?: any;
}
interface Props {
  Popover: React.FunctionComponent<{
    title?: string;
    children?: ({ popoverVisible }: PopoverChildren) => React.ReactNode;
    [key: string]: any;
  }>;
  ToolbarButton: React.FunctionComponent<{
    icon?: JSX.Element;
    selected?: any;
    onClick?: () => void;
    label?: string;
    [key: string]: any;
  }>;
  toggleSidebar: (sidebarId: string, otherState?: string) => void;
}

/**
 * @example
 * ```tsx
 * <ChannelsButton
 *   Popover={Popover}
 *   ToolbarButton={ToolbarButton}
 *   toggleSidebar={toggleSidebar}
 * />
 * ```
 */
export default function ChannelsButton({
  Popover,
  ToolbarButton,
  toggleSidebar,
}: Props): JSX.Element {
  return (
    <Popover title="Channels">
      {({ popoverVisible }) => (
        <ToolbarButton
          icon={<Icon />}
          selected={popoverVisible}
          onClick={() => toggleSidebar('channels')}
          label="Channels"
        />
      )}
    </Popover>
  );
}
