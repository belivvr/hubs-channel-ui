import React, { useState } from 'react';
import makeHubURL from './makeHubURL';

const style = (hover: boolean): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '40px',
  padding: '0 16px',
  fontSize: '12px',
  fontWeight: 700,
  color: hover ? 'var(--active-text-color)' : 'var(--text1-color)',
  backgroundColor: hover ? 'var(--active-color-hover)' : 'transparent',
  textDecoration: 'none',
});

export interface Props {
  url?: string;
  hubId?: string;
  children: React.ReactNode;
}

export default function Item({ url, hubId, children }: Props): JSX.Element {
  const href = url || makeHubURL(hubId || '');
  const [hover, setHover] = useState<boolean>(false);

  return (
    <a
      href={href}
      style={style(hover)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  );
}
