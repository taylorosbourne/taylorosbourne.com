import React from 'react';

interface ListItemObject {
  color: string;
  skill: string;
}

const listItems: ListItemObject[][] = [
  [
    { color: '#b58900', skill: 'TypeScript' },
    { color: '#2aa198', skill: 'Node' },
    { color: '#839496', skill: 'Express' },
    { color: '#6c71c4', skill: 'React' },
  ],
  [
    { color: '#d33682', skill: 'GraphQL' },
    { color: '#dc322f', skill: 'MongoDB' },
    { color: '#859900', skill: 'Ruby' },
    { color: '#cb4b16', skill: 'git' },
  ],
]

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
      {listItems.map((arr, i) => {
        return (
          <ul key={i}>
            {arr.map((item, i) => {
              const { color, skill } = item;
              return (
                <li key={i} style={{ color }}>{skill}</li>
              )
            })}
          </ul>
        )
      })}
    </div>
  </div>
);

export default Skills;
