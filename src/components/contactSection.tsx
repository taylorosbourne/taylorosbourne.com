import React, { FC } from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  @media(max-width: 800px) {
    font-size: 0.85rem;
  }
`;

interface ListItemObject {
  category: string;
  content: string;
  color: string;
}

const listItems: ListItemObject[] = [
  {
    category: 'email',
    content: 'taylorosbourne@protonmail.com',
    color: '#859900',
  },
  {
    category: 'github',
    content: 'github.com/taylorosbourne',
    color: '#cb4b16'
  },
  {
    category: 'linkedin',
    content: 'linkedin.com/in/taylor-osbourne',
    color: '#2aa198'
  },
  {
    category: 'twitter',
    content: 'twitter.com/taylorosbourne',
    color: '#268bd2'
  },
]

const Contact: FC = () => (
  <div>
    <h2>Contact</h2>
    <ul>
      {listItems.map((item, i) => {
        const { category, content, color } = item;
        return (
          <ListItem key={i}>
            <span style={{ color }}>{category}:</span>
            <a style={{textDecoration: `none`, color: `#fff`}} href={`https://${content}`}>{content}</a>
          </ListItem>
        )
      })}
    </ul>
  </div>
);

export default Contact;
