import React from 'react';

import type { Props as ChannelProps } from './Channel';
import Channel from './Channel';

interface Props {
  data: ChannelProps[];
}

export default function Channels({ data }: Props): JSX.Element {
  return (
    <div>
      {
        data.map(({
          url, hubId, children,
        }) => <Channel key={hubId || url} url={url} hubId={hubId}>{children}</Channel>)
      }
    </div>
  );
}
