import React from 'react';

import type { Props as ChannelProps } from './Channel';
import Channel from './Channel';

const style: React.CSSProperties = {
  height: 'calc(100% - 61px)',
  overflow: 'auto',
};

interface Props {
  data: ChannelProps[];
}

export default function Channels({ data }: Props): JSX.Element {
  return (
    <div style={style}>
      {
        data.map(({
          url, hubId, children,
        }) => <Channel key={hubId || url} url={url} hubId={hubId}>{children}</Channel>)
      }
    </div>
  );
}
