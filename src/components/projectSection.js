import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  @media(max-width: 800px) {
    font-size: 0.85rem;
  }
`;

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <ul>
      <ListItem>
        <span>
          dad-joke CLI
        </span>
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
            href="https://github.com/taylorosbourne/dad-joke-cli"
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
              <span role="img" aria-label="stars">
                &#10024;
              </span>
            </span>
          </a>
          <a
            style={{
              textDecoration: `none`,
            }}
            href="https://www.npmjs.com/package/dad-joke-cli"
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
              NPM{' '}
              <span role="img" aria-label="stars">
                &#9889;
              </span>
            </span>
          </a>
        </span>
      </ListItem>
      <ListItem>
        <span
          style={{
            color: ``,
          }}
        >
          node-clean-up
        </span>
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
            href="https://github.com/taylorosbourne/nodejs-cleanup"
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
              <span role="img" aria-label="stars">
                &#10024;
              </span>
            </span>
          </a>
          <a
            style={{
              textDecoration: `none`,
            }}
            href="https://www.npmjs.com/package/nodejs-cleanup"
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
              NPM{' '}
              <span role="img" aria-label="stars">
                &#9889;
              </span>
            </span>
          </a>
        </span>
      </ListItem>
      <ListItem>
        <span
          style={{
            color: ``,
          }}
        >
          yante
        </span>
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
            href="https://github.com/taylorosbourne/yante"
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
              <span role="img" aria-label="stars">
                &#10024;
              </span>
            </span>
          </a>
          <a
            style={{
              textDecoration: `none`,
            }}
            href="https://chrome.google.com/webstore/detail/yante/cdadmhaleiandaodcgnlaebdijngpmhn/reviews"
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
              Chrome{' '}
              <span role="img" aria-label="rainbow">
                &#127752;
              </span>
            </span>
          </a>
        </span>
      </ListItem>
      <ListItem>
        <span
          style={{
            color: ``,
          }}
        >
          steelandsilverpod
        </span>
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
            href="https://github.com/taylorosbourne/steelandsilverpod.com"
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
              <span role="img" aria-label="stars">
                &#10024;
              </span>
            </span>
          </a>
          <a
            style={{
              textDecoration: `none`,
            }}
            href="https://www.steelandsilverpod.com/"
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
              Site{' '}
              <span role="img" aria-label="stars">
                &#127881;
              </span>
            </span>
          </a>
        </span>
      </ListItem>
    </ul>
  </div>
);

export default Projects;
