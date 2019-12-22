import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  @media(max-width: 800px) {
    font-size: 0.85rem;
  }
`;

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <ul>
      <ListItem>
        <span style={{ color: `#859900` }}>email:</span>
        taylorgosbourne@gmail.com
      </ListItem>
      <ListItem>
        <span style={{ color: `#cb4b16` }}>github:</span>
        github.com/taylorosbourne
      </ListItem>
      <ListItem>
        <span style={{ color: `#2aa198` }}>linkedin:</span>
        linkedin.com/in/taylor-osbourne/
      </ListItem>
      <ListItem>
        <span style={{ color: `#268bd2` }}>twitter</span>
        twitter.com/taylorosbourne
      </ListItem>
    </ul>
  </div>
);

export default Contact;
