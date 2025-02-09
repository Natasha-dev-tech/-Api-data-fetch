import React from 'react'

const Button = ({btntext,className}) => {
  return (
    <div className={`${className}`}>{btntext}</div>
  )
}

export default Button