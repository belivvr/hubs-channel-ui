import React, { useState } from 'react';

import Button from './Button';
import Input from './Input';

const divStyle: React.CSSProperties = {
  padding: '8px 16px',
  backgroundColor: 'var(--input-bg-color)',
  boxSizing: 'border-box',
};
const formStyle = (focus: boolean): React.CSSProperties => ({
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  flexBasis: 'max-content',
  borderRadius: '8px',
  boxSizing: 'border-box',
  outline: focus ? '3px solid var(--input-border-color-hover)' : '1px solid var(--input-border-color)',
});

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
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div style={divStyle}>
      <div style={formStyle(focus)}>
        <Input value={value} onChange={onChange} onFocus={setFocus} />
        <Button onClick={onClick} />
      </div>
    </div>
  );
}
