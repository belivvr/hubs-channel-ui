import React from 'react';
import { useIntl } from 'react-intl';

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: '45px',
  padding: '8px',
  color: 'var(--text1-color)',
  fontSize: '100%',
  backgroundColor: 'transparent',
  border: 'none',
  borderRight: 'none',
  boxSizing: 'border-box',
  outline: 'none',
};

interface Props {
  value: string;
  onChange: (value: string) => void;
  onFocus: (focus: boolean) => void;
}

export default function Input({
  value, onChange, onFocus,
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
      onFocus={() => onFocus(true)}
      onBlur={() => onFocus(false)}
    />
  );
}
