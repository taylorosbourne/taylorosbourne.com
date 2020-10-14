import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  @media(max-width: 800px) {
    font-size: 0.85rem;
  }
`;

const StyledSpan = styled.span`
  color: #b58900;
  padding-bottom: 5px;
  border-bottom: 3px rgba(0,0,0,0) dashed;
  font-weight: 300;
  :hover {
    border-bottom: 3px #dc322f dashed;
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
    title: 'cra-temp-ts-apollo',
    sourceHref: 'https://github.com/taylorosbourne/cra-template-typescript-apollo',
    live: 'NPM',
    liveHref: 'https://www.npmjs.com/package/cra-template-typescript-apollo',
    liveEmoji: { __html: '&#9889;' },
  },
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
    title: 'this-site',
    sourceHref: 'https://github.com/taylorosbourne/taylorosbourne.com',
    live: 'Site',
    liveHref: 'https://www.taylorosbourne.com/',
    liveEmoji: { __html: '&#127881;' },
  },
  {
    title: 'yante',
    sourceHref: 'https://github.com/taylorosbourne/yante',
    live: 'Chrome',
    liveHref: 'https://chrome.google.com/webstore/detail/yante/cdadmhaleiandaodcgnlaebdijngpmhn/reviews',
    liveEmoji: { __html: '&#127752;' },
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
                <StyledSpan>
                  Github{' '}
                  <span role="img" aria-label="emoji">
                    &#10024;
                  </span>
                </StyledSpan>
              </a>
              <a
                style={{
                  textDecoration: `none`,
                }}
                href={liveHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledSpan>
                  {live}{' '}
                  <span role="img" aria-label="emoji" dangerouslySetInnerHTML={__html} />
                </StyledSpan>
              </a>
            </span>
          </ListItem>
        )
      })}
    </ul>
  </div>
);

export default Projects;
