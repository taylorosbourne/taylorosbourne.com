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
              link
              date
              duration
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
        const { workshop, link, date, duration } = ws.node.frontmatter;

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
              <StyledGatsbyLink to={`/${link}`}>{workshop} - Slides</StyledGatsbyLink>
            </h3>
            <small>
            <span style={{ color: `#6c71c4` }}>{date}</span>{' '}
            <span role="img" aria-label="read">
              Duration ⏰:
            </span>
            {' '}{duration} hours
          </small>
          </div>
        );
      })}
    </>
  )
};

export default WorkshopList;
