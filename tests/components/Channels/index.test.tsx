import React from 'react';
import { render } from '@testing-library/react';

import Channels from '../../../src/components/Channels';

test('Channels renders well', () => {
  const givenData = [
    { hubId: `channel0`, children: `channel0` },
    { url: `https://hubs.local:4000/channel1`, children: `channel1` },
  ];

  render(<Channels data={givenData} />)
});
