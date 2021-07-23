import React from 'react'
import './Card.css'

export const Card = (props) => {
  const {
    title,
    children,
    cardStyle,
    titleStyle
  } = props

  return (
    <div className={`card${!cardStyle ? "" : " " + cardStyle}`}>
      <div className={`title${!titleStyle ? "" : " " + titleStyle}`}>
        <h2>{title}</h2>
      </div>
      <div className="description">
        {children}
      </div>
    </div>
  )
}