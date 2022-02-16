import React from 'react';

import Button from './Button';
import Input from './Input';

const divStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexBasis: 'max-content',
  padding: '8px 16px',
  backgroundColor: 'var(--input-bg-color)',
  boxSizing: 'border-box',
};

interface Props {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

export default function Form({
  value,
  onChange,
  onClick,
}: Props) {
  return (
    <div style={divStyle}>
      <Input value={value} onChange={onChange} />
      <Button onClick={onClick} />
    </div>
  );
}
