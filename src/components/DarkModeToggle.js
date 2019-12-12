import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';
import Toggle from './Toggle';

const ToggleComponent = styled.div`
  z-index: 2;
`;

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <ToggleComponent className="dark-mode-toggle">
      <button type="button" className="sun" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </ToggleComponent>
  );
};

export default DarkModeToggle;
