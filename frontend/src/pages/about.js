import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, stack, info, image } = nodes[0]
  return (
    <Layout>
      <SEO title="About" description="This is the about page" />
      <section className="about">
        <div className="about__header">
          <Image fluid={image.childImageSharp.fluid} className="about__header__image" />
          <div className="about__header__title">
            <Title title={title} />
          </div>
        </div>

        <div className="about__content">
          <article className="about__content__text">
            <p>{info}</p>
            <div className="about__content__stacks">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default About
