import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Carousel from '../shim/nuka-carousel';

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

const StyledSlide = styled.div`
  h2 {
    margin-top: 0;
    font-weight: 200;
    color: #b58900;
    border-bottom: 3px #dc322f dashed;
    padding-bottom: 5px;
    font-size: 4rem;
  }
  li {
    line-height: 1;
    font-size: 2rem;
    @media (max-width: 700px) {
      margin-left: -28px;
    }
    a {
      color: #d33682;
    }
    span.emphasized {
      font-style: italic;
      border-bottom: 3px #dc322f dashed;
      color: #2aa198;
    }
  }
`;

const GatsbyWorkshop = ({ data }) => {
  const slides = data.allMarkdownRemark.edges;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <SlideDeck>
      <Carousel>
        {slides.map((slide, i) => {
          const { frontmatter, id, html: __html } = slide.node;
          return (
            <div key={i} style={{
              marginTop: `250px`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`
            }}>
              <StyledSlide
                key={id}
                dangerouslySetInnerHTML={{ __html }}
              />
            </div>
          )
        })}
      </Carousel>
    </SlideDeck>
  );
}

export const SLIDES_BY_WORKSHOP = graphql`
  query SLIDES_BY_WORKSHOP {
    allMarkdownRemark(
      filter: {frontmatter: {
        type: {eq: "slide"}, 
        workshop: {eq: "Gatsby Workshop"}
      }},
      sort: {fields: frontmatter___slide, order: ASC}
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            type
            workshop
          }
        }
      }
    }
  }
`;

export default GatsbyWorkshop;
