import React from 'react';

const Skills = () => (
  <div>
    <h2>Skills</h2>
    <div
      style={{
        display: `flex`,
        width: `100%`,
        justifyContent: `space-between`,
        alignItems: `flex-start`,
      }}
    >
      <ul style={{ margin: 0, padding: 0, width: `48.5%` }}>
        <li style={{ color: `#b58900` }}>JavaScript</li>
        <li style={{ color: `#2aa198` }}>React</li>
        <li style={{ color: `#839496` }}>Node</li>
        <li style={{ color: `#6c71c4` }}>Express</li>
      </ul>
      <ul style={{ margin: 0, padding: 0, width: `48.5%` }}>
        <li style={{ color: `#d33682` }}>Graphql</li>
        <li style={{ color: `#dc322f` }}>Ruby</li>
        <li style={{ color: `#859900` }}>MongoDB</li>
        <li style={{ color: `#cb4b16` }}>git</li>
      </ul>
    </div>
  </div>
);

export default Skills;
