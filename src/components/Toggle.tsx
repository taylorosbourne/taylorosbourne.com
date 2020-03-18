import React, { FC } from 'react';

interface Props {
  checked: boolean;
  onChange: () => void;
}

const Toggle: FC<Props> = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
