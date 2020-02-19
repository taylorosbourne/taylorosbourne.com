import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  padding: 22px;
  width: 800px;
  margin: 0 auto;
  overflow: scroll;
  max-height: 500px;
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
      <Slider
        {...settings}
        arrows={true}
        style={{
          height: `80vh`,
          width: `80vw`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`
        }}
      >
        {slides.map((slide, i) => {
          const { frontmatter, id, html: __html } = slide.node;
          return (
            <div key={i} style={{
              width: `80%`,
              height: `80%`,
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
      </Slider>
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
