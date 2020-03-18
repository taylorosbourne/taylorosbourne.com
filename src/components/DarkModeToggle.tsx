import React, { FC } from 'react';
import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';

import Toggle from './Toggle';

const ToggleComponent = styled.div`
  z-index: 2;
`;

const DarkModeToggle: FC = () => {
  const { disable, enable, toggle, value } = useDarkMode(true);

  return (
    <ToggleComponent className="dark-mode-toggle">
      <button type="button" className="sun" onClick={disable}>
        ☀
      </button>
      <Toggle checked={value} onChange={toggle} />
      <button type="button" onClick={enable}>
        ☾
      </button>
    </ToggleComponent>
  );
};

export default DarkModeToggle;
