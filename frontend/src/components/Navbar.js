import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="navbar__header">
          <a href="/" className="navbar__main-logo">
            <svg viewBox="0 0 38 43" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="m27.05 12.65.4 6.3h-1c-1.8-4-2.5-5.3-4.2-5.3h-.8v14c0 1.3.4 1.4 2.1 1.6v1.1h-9.1v-1.1c1.6-.2 2.1-.3 2.1-1.6v-14h-.8c-1.7 0-2.4 1.3-4.2 5.3h-1l.4-6.3z"/>
              <path fill="currentColor" d="m19 1.2 17.8 10.2v20.3L19 41.8 1.2 31.7V11.3L19 1.2M19 0 .2 10.8v21.5L19 43l18.8-10.8V10.8L19 0z"/>
            </svg>
          </a>
          <button type="button" className="navbar__toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="navbar__nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
