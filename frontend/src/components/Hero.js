import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
      }
    }
  }
`

const Hero = () => {
  const {
    allStrapiAbout: { nodes },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="hero__container">
        <article className="hero__info">
          <div>
            <h3 className="hero__info__title">Hi, My name is</h3>
            <h1 className="hero__info__name">Taufikur Rahman</h1>
            <h4 className="hero__info__subtitle">I am a Software Engineer</h4>
            <Link to="/contact" className="hero__contact-button">
              Get in touch
            </Link>
            <SocialLinks />
          </div>
        </article>
        <div className="hero__cloud">
          <span data-weight="2">HTML</span>
          <span data-weight="9">Typescript</span>
          <span data-weight="4">Node</span>
          <span data-weight="7">PHP</span>
          <span data-weight="9">Javascript</span>
          <span data-weight="5">C#</span>
          <span data-weight="3">Bitbucket</span>
          <span data-weight="7">MySQL</span>
          <span data-weight="4">Firebase</span>
          <span data-weight="4">Laravel</span>
          <span data-weight="9">OrchardCore</span>
          <span data-weight="2">Apollo</span>
          <span data-weight="8">Wordpress</span>
          <span data-weight="3">yarn</span>
          <span data-weight="7">Strapi</span>
          <span data-weight="2">SQL</span>
          <span data-weight="2">Content Security Policy</span>
          <span data-weight="8">Octopus Deploy</span>
          <span data-weight="1">Tailwind</span>
          <span data-weight="9">GraphQL</span>
          <span data-weight="3">HTML Templates</span>
          <span data-weight="9">CSS</span>
          <span data-weight="4">Storybook</span>
          <span data-weight="3">Docker</span>
          <span data-weight="5">Next</span>
          <span data-weight="9">Gatsby</span>
          <span data-weight="4">Custom Elements</span>
          <span data-weight="6">Shadow DOM</span>
          <span data-weight="8">Teamcity</span>
          <span data-weight="2">Web APIs</span>
          <span data-weight="5">Design Patterns</span>
          <span data-weight="8">MVC</span>
          <span data-weight="4">MVVM</span>
          <span data-weight="5">Bootstrap</span>
          <span data-weight="2">BEM</span>
          <span data-weight="9">React</span>
          <span data-weight="4">LESS</span>
          <span data-weight="5">Sass</span>
          <span data-weight="3">Git</span>
          <span data-weight="8">Github</span>
          <span data-weight="1">npm</span>
          <span data-weight="4">Vite</span>
          <span data-weight="2">Webpack</span>
          <span data-weight="5">Parcel</span>
          <span data-weight="8">Prettier</span>
          <span data-weight="6">ESLint</span>
          <span data-weight="1">OWASP Security Risks</span>
          <span data-weight="4">Cypress</span>
          <span data-weight="5">Jasmine</span>
          <span data-weight="6">Protractor</span>
          <span data-weight="3">Playwright</span>
          <span data-weight="9">BrowserStack</span>
          <span data-weight="3">CORS</span>
          <span data-weight="7">HTTPS</span>
          <span data-weight="4">Agile Development</span>
          <span data-weight="7">Code Review</span>
        </div>
      </div>
    </header>
  )
}

export default Hero
