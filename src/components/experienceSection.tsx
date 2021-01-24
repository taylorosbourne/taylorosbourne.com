import React, { FC } from 'react';

interface ExperienceItemObject {
  title: string;
  date: string;
  content: string;
}

const experienceItems: ExperienceItemObject[] = [
  {
    title: 'SOFTWARE ENGINEER - FLASHTRACT',
    date: 'AUGUST 2020 - ',
    content: 'As an engineer at Flashtract, I work on our Web Application\'s UI, SPA state management, data fetching, and more.  Currently working primarily in TypeScript and React.',
  },
  {
    title: 'SOFTWARE ENGINEER - MANHEIM',
    date: 'APR 2019 - JUL 2020',
    content: 'As a developer at Manheim, I was responsible for maintaining, adding features, and providing support for an ecosystem of internal applications. Daily, I used technologies including: Ruby on Rails, MongoDB, React.js, Jenkins, and Docker.',
  },
  {
    title: 'INSTRUCTOR ASSOCIATE - GENERAL ASSEMBLY',
    date: 'JAN 2019 - MAY 2019',
    content: 'As an instuctor associate at General Assembly, I assisted Web Development Immersive (now Software Engineering Immersive) classes by leading lessons in Node.js, React.js, MongoDB, and more.',
  },
  {
    title: 'FREELANCE FULL-STACK DEVELOPER',
    date: 'AUG 2018 - ',
    content: 'As a freelance developer, I have built production-level applications and websites utilizing advanced, modern JavaScript technologies.',
  },
]

const Experience: FC = () => (
  <div>
    <h2>Experience</h2>
    <dl>
      {experienceItems.map((item, i) => {
        const { title, date, content } = item;
        return (
          <>
            <dt>{title}</dt>
            <span>{date}</span>
            <dd>{content}</dd>
          </>
        )
      })}
    </dl>
  </div>
);

export default Experience;
