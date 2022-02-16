import React from 'react';

import isDarkTheme from '../utils/isDarkTheme';

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
  LightThemeIcon: any;
  DarkThemeIcon: any;
}

/**
 * @example
 * ```tsx
 * <ChannelsButton
 *   Popover={Popover}
 *   ToolbarButton={ToolbarButton}
 *   toggleSidebar={toggleSidebar}
 *   LightThemeIcon={LightThemeIcon}
 *   DarkThemeIcon={DarkThemeIcon}
 * />
 * ```
 */
export default function ChannelsButton({
  Popover,
  ToolbarButton,
  toggleSidebar,
  LightThemeIcon,
  DarkThemeIcon,
}: Props): JSX.Element {
  return (
    <Popover title="Channels">
      {({ popoverVisible }) => (
        <ToolbarButton
          icon={isDarkTheme() ? DarkThemeIcon : LightThemeIcon}
          selected={popoverVisible}
          onClick={() => toggleSidebar('channels')}
          label="Channels"
        />
      )}
    </Popover>
  );
}
