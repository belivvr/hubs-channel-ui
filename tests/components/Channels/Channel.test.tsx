import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Channel from '../../../src/components/Channels/Channel';
import { mockLocationHref } from '../../testUtils';
import makeHubURL from '../../../src/components/Channels/makeHubURL';

interface Props {
  url?: string;
  hubId?: string;
  content?: React.ReactNode;
}

function renderChannel({
  url = '',
  hubId = '',
  content = '',
}: Props) {
  render(<Channel hubId={hubId} url={url}>{content}</Channel>);
}

describe('Channel', () => {
  const givenText: string = 'channel';

  context('When mouseEnter', () => {
    it('Should calls setHover', () => {
      renderChannel({ content: givenText });

      fireEvent.mouseEnter(screen.getByText(givenText));
    });
  });

  context('When mouseLeave', () => {
    it('Should calls setHover', () => {
      renderChannel({ content: givenText });

      fireEvent.mouseLeave(screen.getByText(givenText));
    });
  });

  context('When gives url prop', () => {
    const givenURL: string = 'https://hubs.local:4000';

    it('Should renders has given url href a tag', () => {
      renderChannel({ content: givenText, url: givenURL });

      expect(screen.getByText(givenText).getAttribute('href')).toBe(givenURL);
    });
  });

  context('When gives hubId prop', () => {
    const currentURL: string = 'https://hubs.mozilla.com/eTDzkRg/snappy-bleak-camp';
    const givenHubId: string = 'https://hubs.local:4000';

    it('Should renders href what replace hub id in url', () => {
      mockLocationHref({ href: currentURL });
      renderChannel({ content: givenText, hubId: givenHubId });

      expect(screen.getByText(givenText).getAttribute('href')).toBe(makeHubURL(givenHubId));
    });
  });
});
