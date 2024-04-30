import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://linkedin.com/in/taufi-bd",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/taufi-bd",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/AskTaufiq",
  },

  {
    id: 4,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/taufiq.001",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
      >
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
