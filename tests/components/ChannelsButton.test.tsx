import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ChannelsButton from '../../src/components/ChannelsButton';

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
function MockToolbarButton({ onClick }: ToolbarButtonProps): JSX.Element {
  return <button type="button" onClick={onClick}>button</button>;
}

interface Props {
  toggleSidebar: (sidebarId: string, otherState?: string) => void;
}

function renderChannelsButton({ toggleSidebar }: Props) {
  return render(<ChannelsButton
    Popover={MockPopover}
    ToolbarButton={MockToolbarButton}
    toggleSidebar={toggleSidebar}
  />)
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
});
