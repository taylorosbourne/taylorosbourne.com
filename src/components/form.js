import React from 'react';
import styled from 'styled-components';
import { StyledAnchorLink } from '../styles/Link';

const Input = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 2px solid rgb(242, 242, 242);
  font-size: 1.5rem;
  color: #173449;
  :focus {
    outline: none;
    border-bottom: 2px solid #173449;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 250px;
  border: 2px solid rgb(242, 242, 242);
  border-radius: 5px;
  :focus {
    outline: none;
    border: 2px solid #173449;
  }
`;

const SubmitButton = styled.button`
  background: rgb(242, 242, 242);
  border: 0;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 5px 10px;
  font-family: Arial;
  color: #173449;
  width: 100%;
  transition: 0.3s ease;
  cursor: pointer;
  :hover {
    color: rgb(242, 242, 242);
    background: #173449;
  }
`;

const Form = () => (
  <form
    name="contact"
    method="post"
    action="/thanks"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    style={{
      fontFamily: `Arial`,
    }}
  >
    <input type="hidden" name="form-name" value="contact" />
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `flex-start`,
      }}
    >
      <div style={{ width: `45%` }}>
        <p>
          <label>
            Your name:
            <br />
            <Input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <Input type="email" name="email" />
          </label>
        </p>
        <span>
          <ul style={{ listStyle: `none` }}>
            <li>
              <span role="img" aria-label="email">
                📬
              </span>{" "}
              <StyledAnchorLink
                href="mailto:taylorgosbourne@gmail.com"
                rel="noopener noreferrer"
                alt="github"
              >
                send me an email
              </StyledAnchorLink>
            </li>
            <li>
              <span role="img" aria-label="github">
                👨‍💻
              </span>{" "}
              <StyledAnchorLink
                href="https://github.com/taylorosbourne"
                target="_blank"
                rel="noopener noreferrer"
                alt="github"
              >
                check out my github
              </StyledAnchorLink>
            </li>
            <li>
              <span role="img" aria-label="linkedin">
                👨‍💼
              </span>{" "}
              <StyledAnchorLink
                href="https://www.linkedin.com/in/taylor-osbourne/"
                target="_blank"
                rel="noopener noreferrer"
                alt="linkedin"
              >
                connect on linkedin
              </StyledAnchorLink>
            </li>
          </ul>
        </span>
      </div>
      <div style={{ width: `45%` }}>
        <p>
          <label>
            Message:
            <br />
            <Textarea name="message"></Textarea>
          </label>
        </p>
        <p>
          <SubmitButton type="submit">
            submit{" "}
            <span role="img" aria-label="submit-yay">
              {" "}
              🎉
            </span>
          </SubmitButton>
        </p>
      </div>
    </div>
  </form>
);

export default Form;
