import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';
import SlideOne from '../components/slides/gatsby-workshop/slideOne';
import SlideTwo from '../components/slides/gatsby-workshop/slideTwo';

const SlideDeck = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #073642;
  color: rgb(212, 212, 212);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slide = styled.div`
  height: 100%; 
  display: flex; 
  justify-content: center; 
  align-items: center;
`;

const GatsbyWorkshop = () => {
  return (
    <SlideDeck>
      <Carousel>
        {[<SlideOne />, <SlideTwo />].map((slide, i) => {
          return (
            <Slide>
              {slide}
            </Slide>
          )
        })}
      </Carousel>
    </SlideDeck>
  );
};

export default GatsbyWorkshop;
