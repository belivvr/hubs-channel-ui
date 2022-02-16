import React from 'react';
import { useIntl } from 'react-intl';

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: '45px',
  padding: '8px',
  color: 'var(--text1-color)',
  fontSize: '100%',
  backgroundColor: 'transparent',
  border: '1px solid var(--input-border-color)',
  borderRight: 'none',
  borderRadius: '8px',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  boxSizing: 'border-box',
};

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function Input({
  value, onChange,
}: Props): JSX.Element {
  const intl = useIntl();

  return (
    <input
      type="text"
      style={inputStyle}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={intl.formatMessage({
        id: 'channel-sidebar-container.input-placeholder.private-channel',
        defaultMessage: 'Insert Private Channel',
      })}
    />
  );
}
