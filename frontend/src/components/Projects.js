import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { FaArrowRight } from "react-icons/fa";


const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="projects">
      <Title title={title} />
      <div className="projects__inner-wrapper">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="projects__button">
          <span>See All Projects</span><FaArrowRight />
        </Link>
      )}
    </section>
  )
}

export default Projects
