import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { setTheme, setUserDefaultDarkMode } from '../testUtils';
import ChannelsButton from '../../src/components/ChannelsButton';

beforeEach(() => {
  setUserDefaultDarkMode(false);
  setTheme('Browser Default');
});

interface MockPopoverProps {
  title?: string;
  children?: ({ popoverVisible }: any) => React.ReactNode;
}
function MockPopover({ title, children }: MockPopoverProps): JSX.Element {
  return <div>{title}{children({})}</div>;
}
interface ToolbarButtonProps {
  icon?: JSX.Element;
  selected?: any;
  onClick?: () => void;
  label?: string;
}
function MockToolbarButton({ onClick, icon }: ToolbarButtonProps): JSX.Element {
  return <button type="button" onClick={onClick}>{icon}</button>;
}

interface Props {
  toggleSidebar: (sidebarId: string, otherState?: string) => void;
}

const lightTheme = 'light-theme-icon';
const darkTheme = 'dark-theme-icon';

function renderChannelsButton({ toggleSidebar }: Props) {
  return render(<ChannelsButton
    Popover={MockPopover}
    ToolbarButton={MockToolbarButton}
    toggleSidebar={toggleSidebar}
    LightThemeIcon={<span>{lightTheme}</span>}
    DarkThemeIcon={<span>{darkTheme}</span>}
  />);
}

describe('ChannelsButton', () => {
  context('When click', () => {
    const givenToggleSidebar = jest.fn();

    it('Should be call toggleSidebar function', () => {
      renderChannelsButton({ toggleSidebar: givenToggleSidebar });

      expect(givenToggleSidebar).not.toBeCalled();

      fireEvent.click(screen.getByRole('button'));

      expect(givenToggleSidebar).toBeCalled();
    });
  });

  context('When is light theme', () => {
    it('Should renders light theme icon', () => {
      setTheme('hubs-default');
      renderChannelsButton({ toggleSidebar: () => {} });

      expect(screen.getByText(lightTheme)).toBeInTheDocument();
    });
  });

  context('When is dark theme', () => {
    it('Should renders dark theme icon', () => {
      setTheme('hubs-dark-mode');
      renderChannelsButton({ toggleSidebar: () => {} });

      expect(screen.getByText(darkTheme)).toBeInTheDocument();
    });
  });
});
