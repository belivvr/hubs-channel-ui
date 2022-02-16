import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Channel from '../../../src/components/Channels/Channel';

interface Props {
  hubId?: string;
  content?: React.ReactNode;
}

function renderChannel({
  hubId = '',
  content = '',
}: Props) {
  render(<Channel hubId={hubId}>{content}</Channel>);
}

describe('Channel', () => {
  context('When mouseEnter', () => {
    const givenText = 'channel';

    it('Should calls setHover', () => {
      renderChannel({ content: givenText });

      fireEvent.mouseEnter(screen.getByText(givenText));
    });
  });

  context('When mouseLeave', () => {
    const givenText = 'channel';

    it('Should calls setHover', () => {
      renderChannel({ content: givenText });

      fireEvent.mouseLeave(screen.getByText(givenText));
    });
  });
});
