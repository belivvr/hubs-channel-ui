import React from 'react';
import { FormattedMessage } from 'react-intl';

import isDarkTheme from '../utils/isDarkTheme';

interface Props {
  ToolbarButton: React.FunctionComponent<{
    icon?: JSX.Element;
    selected?: any;
    onClick?: () => void;
    label?: JSX.Element;
    [key: string]: any;
  }>;
  onClick: () => void;
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
  ToolbarButton,
  onClick,
  LightThemeIcon,
  DarkThemeIcon,
}: Props): JSX.Element {
  return (
    <ToolbarButton
      icon={isDarkTheme() ? DarkThemeIcon : LightThemeIcon}
      onClick={onClick}
      preset="accept4"
      label={<FormattedMessage id="toolbar.channels-button" defaultMessage="Channels" />}
    />
  );
}
