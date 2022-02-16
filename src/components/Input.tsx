import React from 'react';
import { useIntl } from 'react-intl';

const divStyle: React.CSSProperties = {
  flexBasis: 'max-content',
  padding: '8px 16px',
  backgroundColor: 'var(--input-bg-color)',
  boxSizing: 'border-box',
};
const inputStyle: React.CSSProperties = {
  width: '100%',
  height: '45px',
  padding: '8px',
  color: 'var(--text1-color)',
  fontSize: '100%',
  backgroundColor: 'transparent',
  border: '1px solid var(--input-border-color)',
  borderRadius: '8px',
  boxSizing: 'border-box',
};

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function Input({ value, onChange }: Props): JSX.Element {
  const intl = useIntl();

  return (
    <div style={divStyle}>
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
    </div>
  );
}
