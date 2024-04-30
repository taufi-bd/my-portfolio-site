import React from "react"
import { Link } from "gatsby"
import ThemeToggle from "../components/ThemeToggle"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
  {
    id: 5,
    text: "CV",
    url: "/taufikur_cv_29042024.pdf",
    customClass: "navbar__button",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url} className={link.customClass ? link.customClass : ""}>
        {link.text}{" "}
      </Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
      <ul className={`page-links ${styleClass ? styleClass : ""}`}>
        {tempLinks}
        <ThemeToggle />
      </ul>
  )
}
