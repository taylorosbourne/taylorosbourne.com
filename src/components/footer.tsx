import React, { FC } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 760px;
  margin: 0 auto;
  margin-top: 45px;
  font-weight: 200;
  @media (max-width: 800px) {
    max-width: 90%;
  }
`;

const LinkContainer = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const FooterLink = styled.a`
  color: #b58900;
  margin-right: 15px;
  text-decoration: none;
  border-bottom: 3px #dc322f dashed;
`;

interface FooterLinkObject {
  href: string;
  title: string;
}

const footerItems: FooterLinkObject[] = [
  {
    href: 'https://github.com/taylorosbourne',
    title: 'Github',
  },
  {
    href: 'https://taylorosbourne.com/rss.xml',
    title: 'RSS',
  },
  {
    href: 'https://www.linkedin.com/in/taylor-osbourne/',
    title: 'Linkedin',
  },
  {
    href: 'https://twitter.com/taylorgosbourne',
    title: 'Twitter',
  },
  {
    href: 'https://repl.it/@TaylorOsbourne',
    title: 'Repl.it',
  },
  {
    href: 'https://codepen.io/tozkat/pens/public',
    title: 'Codepen',
  }
]

const Footer: FC = () => (
  <StyledFooter>
    <LinkContainer>
      {footerItems.map((item, i) => {
        const { href, title } = item;
        return (
          <FooterLink
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </FooterLink>
        )
      })}
    </LinkContainer>
  </StyledFooter>
);

export default Footer;
