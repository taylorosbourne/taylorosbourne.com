import React from 'react';
import styled from 'styled-components';

const Sheet = styled.section`
  width: 100%;
  border: 3px dashed #dc322f;
  /* border: 3px dashed #b58900; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Section = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1000px) {
    width: 100%;
  }
  div {
    height: 100%;
    width: 100%;
    /* border: 1px solid #dc322f; */
    padding: 22px;
    h2 {
      margin-top: 0;
      font-weight: 200;
      color: #b58900;
      border-bottom: 3px #dc322f dashed;
      width: 205px;
      padding-bottom: 5px;
    }
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        font-weight: 200;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    p {
      font-weight: 200;
    }
    dl {
      font-weight: 200;
      dt {
        margin: 5px 0;
        color: #6c71c4;
        font-weight: 300;
      }
      span {
        display: inline-block;
        margin: 5px 0;
        color: #2aa198;
      }
    }
  }
`;

const ResumeSheet = () => (
  <Sheet>
    <Section>
      <div>
        <h2>Projects</h2>
        <ul>
          {/* <li>
            <span
              style={{
                color: ``,
              }}
            >
              js-historian
            </span>
            <span
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
                width: `50%`,
              }}
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
              <span
                style={{
                  color: `#b58900`,
                  paddingBottom: `5px`,
                  borderBottom: `3px #dc322f dashed`,
                }}
              >
                Site
                <span role="img" aria-label="celebrate">
                  &#127881;
                </span>
              </span>
            </span>
          </li> */}
          {/* <li>
            <span
              style={{
                color: ``,
              }}
            >
              emoji-decoded
            </span>
            <span
              style={{
                display: `flex`,
                justifyContent: `space-between`,
                alignItems: `center`,
                width: `50%`,
              }}
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
              <span
                style={{
                  color: `#b58900`,
                  paddingBottom: `5px`,
                  borderBottom: `3px #dc322f dashed`,
                }}
              >
                Site{' '}
                <span role="img" aria-label="celebrate">
                  &#127881;
                </span>
              </span>
            </span>
          </li> */}
          <li>
            <span
              style={{
                color: ``,
              }}
            >
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
                  textDecoration: `none`
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
                  textDecoration: `none`
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
          </li>
          <li>
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
                  textDecoration: `none`
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
                  textDecoration: `none`
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
          </li>
          <li>
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
                  textDecoration: `none`
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
                  textDecoration: `none`
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
          </li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>
            <span style={{ color: `#859900` }}>email:</span>
            taylorgosbourne@gmail.com
          </li>
          <li>
            <span style={{ color: `#cb4b16` }}>github:</span>
            github.com/taylorosbourne
          </li>
          <li>
            <span style={{ color: `#2aa198` }}>linkedin:</span>
            linkedin.com/in/taylor-osbourne/
          </li>
          <li>
            <span style={{ color: `#268bd2` }}>twitter</span>
            twitter.com/taylorosbourne
          </li>
        </ul>
      </div>
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
    </Section>
    <Section>
      <div>
        <h2>Experience</h2>
        <dl>
          <dt>SOFTWARE DEVELOPER - MANHEIM</dt>
          <span>APR 2019 - </span>
          <dd>
            As a developer at Manheim, I am responsible for maintaining, adding
            features, and providing support for an ecosystem of internal
            applications. Daily, I use technologies including: Ruby on Rails,
            MongoDB, React.js, Jenkins, and Docker.
          </dd>
          <dt>INSTRUCTOR ASSOCIATE - GENERAL ASSEMBLY</dt>
          <span>JAN 2019 - MAY 2019</span>
          <dd>
            As an instuctor associate at General Assembly, I assisted Web
            Development Immersive (now Software Engineering Immersive) classes
            by leading lessons in Node.js, React.js, MongoDB, and more.
          </dd>
          <dt>FREELANCE FULL-STACK DEVELOPER</dt>
          <span>AUG 2018 - </span>
          <dd>
            As a freelance developer, I have built production-level applications
            and websites utilizing advanced, modern JavaScript technologies.
          </dd>
        </dl>
      </div>
    </Section>
  </Sheet>
);

export default ResumeSheet;
