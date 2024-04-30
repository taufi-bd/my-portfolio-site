import React from "react"

const Title = ({ title }) => {
  return (
    <div className="title">
      <h2>{title || "default title"}</h2>
    </div>
  )
}

export default Title
