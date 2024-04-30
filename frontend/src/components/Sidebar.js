import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="sidebar__close-button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="sidebar__container">
        <Links styleClass={`${isOpen ? "sidebar__container__links" : ""}`} />
        <SocialLinks
          styleClass={`${isOpen ? "sidebar__container__icons" : ""}`}
        ></SocialLinks>
      </div>
    </aside>
  )
}

export default Sidebar
