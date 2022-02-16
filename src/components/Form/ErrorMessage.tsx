import React from 'react';
import { FormattedMessage } from 'react-intl';

const style = (visible: boolean): React.CSSProperties => ({
  display: visible ? 'block' : 'none',
  marginTop: '10px',
  color: '#E1465F',
  fontSize: '12px',
});

interface Props {
  visible: boolean;
}

export default function ErrorMessage({ visible }: Props): JSX.Element {
  return (
    <div style={style(visible)}>
      <FormattedMessage
        id="channel-sidebar-container.error-message"
        defaultMessage="This channel does not exist"
      />
    </div>
  );
}
