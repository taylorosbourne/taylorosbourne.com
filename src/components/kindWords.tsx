import React, { FC, useState } from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Blockquote = styled.blockquote`
  border: 3px #dc322f dashed;
  margin: 5px 0px;
  width: 49.35%;
  padding: 22px;
  @media (max-width: 700px) {
    width: 96%;
  }
`;

const Cite = styled.cite`
  display: block;
  a {
    color: #2aa198;
    background: transparent;
    margin: 5px 0px;
    text-decoration: none;
    font-family: Arial;
    :hover {
      border-bottom: 3px #dc322f dashed;
    }
  }
`;

const Button = styled.button`
  background: none;
  border: 3px rgba(0,0,0,0) dashed;
  color: #b58900;
  padding: 0;
  cursor: pointer;
  :hover {
    border-bottom: 3px #dc322f dashed;
  }
`;

interface Quote {
  name: string;
  body: string;
  website: string;
}

const quotes: Quote[] = [
  {
    name: 'Cecelia Martinez',
    body: 'Taylor has a collaborative, approachable style to teaching that is very effective. He uses examples and metaphors well to explain concepts, and is gracious and patient when answering questions. He does well with adapting material to a wide range of skill levels within one class.  I would definitely recommend him as an instructor and developer.',
    website: 'https://ceceliacreates.netlify.app/',
  },
  {
    name: 'Adam Topper',
    body: `When we were looking for a Full Stack Developer to help us enhance our API offerings and build out a new Front End, we were skeptical about bringing someone in without a lot of traditional experience. Taylor exceeded expectations right out the door with his ability to pick up full process flows and new technologies quickly. In his one year with us, Taylor has continued to sharpen his skills and we've been able to trust his design decisions every step of the way. He has been a great addition to our team and I look forward to working with him more now and in the future.`,
    website: 'https://www.linkedin.com/in/adam-topper-27940221/',
  },
  {
    name: 'Daniel Pino',
    body: `Taylor was an ideal student at General Assembly. While he may not have always been the student who instantly understood each concept the moment it was taught, his work ethic and determination placed him at the top of the class project after project. He is a joy to be around, and he can always be seen with a smile on his face. After I re-entered the industry, I personally tried to refer Taylor onto my team, and I would be thrilled to work with Taylor in the future.`,
    website: 'https://www.linkedin.com/in/daniel-pino/',
  }
];

const KindWords: FC = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
   <QuoteContainer>
    {quotes.map((quote, i) => {
      const { name, body, website } = quote;
      const splitBody = body.split(' ');
      return (
        <Blockquote key={i}>
          {splitBody.filter((word, i) => splitBody.indexOf(word) <= (isShowing ? splitBody.length : 20)).join(' ') + (isShowing ? '' : '...')}
          <Button onClick={() => setIsShowing(!isShowing)}>{isShowing? 'show less': 'show more'}</Button>
          <Cite>
            <a href={`${website}`} target="no_blank">{name}</a>
          </Cite>
        </Blockquote>
      )
    })}
   </QuoteContainer> 
  )
};

export default KindWords;
