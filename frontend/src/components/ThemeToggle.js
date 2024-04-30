import React, { useState, useEffect } from "react"
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setIsDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="navbar__theme-toggle__wrapper">
        <FaSun />
      <label className="navbar__theme-toggle__switch">
        <input className="navbar__theme-toggle__switch__input" type="checkbox" id="themeToggle" checked={isDarkMode} onChange={toggleTheme} />
            <span className={`navbar__theme-toggle__switch__slider ${isDarkMode ? 'dark' : ''}`}></span>
        </label>
        <FaMoon />
    </div>
  )
}

export default ThemeToggle
