import React, { useState, useRef, useEffect } from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import { FaAngleDoubleRight, FaAngleDown, FaAngleUp } from "react-icons/fa"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [isIconExpanded, setIsIconExpanded] = useState(false)
  const [maxHeights, setMaxHeights] = useState([])

  const contentRefs = useRef([])

  useEffect(() => {
    const heights = contentRefs.current.map((ref) => ref.scrollHeight + "px")
    setMaxHeights(heights)
  }, [])

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null)
      setIsIconExpanded(false)
    } else {
      setExpandedIndex(index)
      setIsIconExpanded(true)
    }
  }

  return (
    <section className="experience">
      <Title title="Experience" />
      <div className="experience__wrapper">
        {jobs.map((item, index) => (
          <div key={item.strapiId} className="experience__job-item">
            <button
              className="experience__job-item__button"
              onClick={() => toggleAccordion(index)}
            >
              <span className="experience__job-item__button__content">
                <h4 className="experience__job-item__button__content__company-name">{item.company}</h4>
                <h3 className="experience__job-item__button__content__position">{item.position}</h3>
                <p className="experience__job-item__button__content__date">{item.date}</p>
              </span>
              <span className={`experience__job-item__button__icon ${isIconExpanded && expandedIndex === index ? "expanded" : ""}`}>
               <FaAngleDown />
              </span>
            </button>
            <div
              className={`experience__job-item__description ${expandedIndex === index ? "expanded" : ""}`}
              style={{ maxHeight: expandedIndex === index ? maxHeights[index] : "0px" }}
              
            >
              <div className="experience__job-item__description__inner-wrapper" ref={(el) => (contentRefs.current[index] = el)}>
                {item.desc.map((descItem) => (
                  <div key={descItem.id} className="experience__job-item__description__item">
                    <FaAngleDoubleRight className="experience__job-item__description__item__icon" />
                    <p>{descItem.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Jobs
