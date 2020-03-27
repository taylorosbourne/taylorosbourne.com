import React, { FC } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { StyledGatsbyLink } from '../styles/Link';

const WorkshopList: FC = () => {
  const workshop = useStaticQuery(
    graphql`
    query ALL_WORKSHOP_QUERY {
      allMarkdownRemark(
        limit: 1
        filter: {frontmatter: {
          type: {eq: "slide"}, 
        }},
      ) {
        edges {
          node {
            id
            frontmatter {
              type
              workshop
            }
          }
        }
      }
    }
    `
  );

  const workshopInfo = workshop.allMarkdownRemark.edges;

  return (
    <>
      {workshopInfo.map((ws, i) => {
        const { workshop } = ws.node.frontmatter;
        
        // This is an unholy abomination
        const link = workshop
          .split(' ')
          .join('')
          .replace(/([A-Z])/g, "-$1")
          .toLowerCase()
          .split('')
          .filter((_, i) => {
            return i !== 0;
          });
        
        return (
          <div
            key={i}
            style={{
              fontFamily: `Arial`,
              maxWidth: `1000px`,
              margin: `0 auto 15px`,
            }}
            id={i === 0 ? 'main' : null}
          >
            <h3 className="article-title">
              <StyledGatsbyLink to={`/${link.join('')}`}>{workshop} - Slides</StyledGatsbyLink>
            </h3>
          </div>
        );
      })}
    </>
  )
};

export default WorkshopList;
