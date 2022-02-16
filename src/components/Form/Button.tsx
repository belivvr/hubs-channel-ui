import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const buttonStyle = (hover: boolean): React.CSSProperties => ({
  height: '45px',
  padding: '0 16px',
  color: 'var(--text5-color)',
  fontSize: '100%',
  backgroundColor: hover ? 'var(--accent4-color-hover)' : 'var(--accent4-color)',
  border: '1px solid var(--input-border-color)',
  borderLeft: 'none',
  borderRadius: '8px',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  boxSizing: 'border-box',
  transition: 'background-color .1s ease-in-out',
});

interface Props {
  onClick: () => void;
}

export default function Button({ onClick }: Props): JSX.Element {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <button
      type="button"
      onClick={onClick}
      style={buttonStyle(hover)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FormattedMessage
        id="channel-sidebar-container.entrance-button"
        defaultMessage="Entrance"
      />
    </button>
  );
}
