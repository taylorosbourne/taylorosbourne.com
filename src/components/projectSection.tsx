import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  @media(max-width: 800px) {
    font-size: 0.85rem;
  }
`;

interface ListItemObject {
  title: string;
  sourceHref: string;
  live: string;
  liveHref: string;
  liveEmoji: { __html: string; };
};

const listItems: ListItemObject[] = [
  {
    title: 'dad-joke CLI',
    sourceHref: 'https://github.com/taylorosbourne/dad-joke-cli',
    live: 'NPM',
    liveHref: 'https://www.npmjs.com/package/dad-joke-cli',
    liveEmoji: { __html: '&#9889;' },
  },
  {
    title: 'nodejs-cleanup',
    sourceHref: 'https://github.com/taylorosbourne/nodejs-cleanup',
    live: 'NPM',
    liveHref: 'https://www.npmjs.com/package/nodejs-cleanup',
    liveEmoji: { __html: '&#9889;' },
  },
  {
    title: 'yante',
    sourceHref: 'https://github.com/taylorosbourne/yante',
    live: 'Chrome',
    liveHref: 'https://chrome.google.com/webstore/detail/yante/cdadmhaleiandaodcgnlaebdijngpmhn/reviews',
    liveEmoji: { __html: '&#127752;' },
  },
  {
    title: 'steelandsilverpod',
    sourceHref: 'https://github.com/taylorosbourne/steelandsilverpod.com',
    live: 'Site',
    liveHref: 'https://www.steelandsilverpod.com/',
    liveEmoji: { __html: '&#127881;' },
  },
];

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <ul>
      {listItems.map((item, i) => {
        const { title, sourceHref, live, liveHref, liveEmoji: __html } = item;
        return (
          <ListItem>
            <span>{title}</span>
            <span
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
                width: `50%`,
              }}
            >
              <a
                style={{
                  textDecoration: `none`,
                }}
                href={sourceHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  style={{
                    color: `#b58900`,
                    paddingBottom: `5px`,
                    borderBottom: `3px #dc322f dashed`,
                  }}
                >
                  Github{' '}
                  <span role="img" aria-label="emoji">
                    &#10024;
              </span>
                </span>
              </a>
              <a
                style={{
                  textDecoration: `none`,
                }}
                href={liveHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  style={{
                    color: `#b58900`,
                    paddingBottom: `5px`,
                    borderBottom: `3px #dc322f dashed`,
                  }}
                >
                  {live}{' '}
                  <span role="img" aria-label="emoji" dangerouslySetInnerHTML={__html} />
                </span>
              </a>
            </span>
          </ListItem>
        )
      })}
    </ul>
  </div>
);

export default Projects;
