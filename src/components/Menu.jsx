import React from 'react'

const Menu = ({children,className}) => {
  return (
   <>
    <ul className={` ${className}`}>{children}</ul>
   </>
  )
}

export default Menu