import React from "react"
import styled from "styled-components"
import download from "downloadjs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { siteMetadata } from "../../gatsby-config"

const Button = styled.button`
  border-radius: 5px;
  background: rgb(242, 242, 242);
  color: #173449;
  font-family: sans-serif;
  cursor: pointer;
  padding: 10px 20px;
  border: 0;
  transition: 0.3s ease;
  font-weight: 700;
  :hover {
    background: #173449;
    color: rgb(242, 242, 242);
  }
`

const text = `
Taylor Osbourne

Full-stack developer with a passion for Javascript, and an eagerness to
learn. Experienced in Agile development and team workflows. Striving to
treat everyday as an opportunity to work harder than I did the day
before, learn something new, and thank the people in my life who support
me.

Experience

Software Developer - Manheim

As a developer at Manheim, I am responsible for maintaining, adding
features, and providing support for an ecosystem of in-house
applications. We use technologies including: Ruby on Rails, MongoDB,
React js, Jenkins, and Docker to provide optimized test data via our TDM
API.

Instructor Associate - General Assembly Atlanta

As an Instructor Associate at General Assembly, I assisted Web
Development Immersive classes by teaching lessons in Node.js, React.js,
MongoDB, and more.

Full-Stack Web Developer - Freelance

As a freelance developer, I have built production- level applications
and websites, utilizing advanced javascript technologies.

Education

I'm not going to lie to you, I'm a college drop-out. But so are: Bill
Gates, Steve Jobs, and Michael Dell. Would you hire any of them?

Web Development Immersive (now known as Software Engineering Immersive) - General Assembly Atlanta

Certificate of completion in Web Development Immersive

General Assembly's Web Development Immersive is a 12-week program
focusing on modern web development. Curriculum material covers: html5, css3, JavaScript, Node.js, Express, MongoDB, Handlebars, React, Ruby lang, Ruby on Rails, and Postgresql.

Georgia State University

English major...hopeless wanna-be author or librarian.

University of Mississippi

English major...hopeless wanna-be author or librarian.

Skills

  JavaScript
  Node
  Express
  React
  Nest.js
  MongoDB
  Git
  Bash
`

const Resume = () => (
  <Layout>
    <SEO title={`${siteMetadata.title} - Thanks`} />
    <div
      style={{
        maxWidth: `1000px`,
        margin: `100px auto`,
      }}
    >
      <h1 id="main">Taylor Osbourne</h1>
      <p>
        Full-stack developer with a passion for Javascript, and an eagerness to
        learn. Experienced in Agile development and team workflows. Striving to
        treat everyday as an opportunity to work harder than I did the day
        before, learn something new, and thank the people in my life who support
        me.
      </p>
      <br />
      <h2>Experience</h2>
      <hr />
      <h3>Software Developer - Manheim</h3>
      <p>
        As a developer at Manheim, I am responsible for maintaining, adding
        features, and providing support for an ecosystem of in-house
        applications. We use technologies including: Ruby on Rails, MongoDB,
        React js, Jenkins, and Docker to provide optimized test data via our TDM
        API.
      </p>
      <h3>Instructor Associate - General Assembly Atlanta</h3>
      <p>
        As an Instructor Associate at General Assembly, I assisted Web
        Development Immersive classes by teaching lessons in Node.js, React.js,
        MongoDB, and more.
      </p>
      <h3>Full-Stack Web Developer - Freelance</h3>
      <p>
        As a freelance developer, I have built production- level applications
        and websites, utilizing advanced javascript technologies.
      </p>
      <br />
      <h2>Education</h2>
      <hr />
      <p>
        I'm not going to lie to you, I'm a college drop-out. But so are: Bill
        Gates, Steve Jobs, and Michael Dell. Would you hire any of them?
      </p>
      <h3>
        Web Development Immersive (now known as Software Engineering Immersive)
        - General Assembly Atlanta
      </h3>
      <p>Certificate of completion in Web Development Immersive</p>
      <p>
        General Assembly's Web Development Immersive is a 12-week program
        focusing on modern web development. Curriculum material covers: html5, css3, JavaScript, Node.js, Express, MongoDB, Handlebars, React, Ruby lang, Ruby on Rails, and Postgresql.
      </p>
      <h3>Georgia State University</h3>
      <p>English major...hopeless wanna-be author or librarian.</p>
      <h3>University of Mississippi</h3>
      <p>English major...hopeless wanna-be author or librarian.</p>
      <br />
      <h2>Skills</h2>
      <hr />
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `flex-start`,
        }}
      >
        <ul style={{ width: `45%` }}>
          <li>JavaScript</li>
          <li>Node</li>
          <li>Express</li>
          <li>React</li>
        </ul>
        <ul style={{ width: `45%` }}>
          <li>Nest js</li>
          <li>MongoDB</li>
          <li>Git</li>
          <li>Bash</li>
        </ul>
      </div>
      <br />
      <Button
        onClick={() => download(text, "taylor_osbourne.txt", "text/plain")}
      >
        Download
      </Button>
    </div>
  </Layout>
)

export default Resume
