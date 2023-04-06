import React from 'react'

const Buttongradient=({title,className})=> {
  return (
    <div className={`w-fit bg-gradient-to-r from-thOrange to-thBlue py-2 px-6 text-black rounded-lg duration-300 hover:scale-110  ${className}`}>{title}</div>
  )
}

export default Buttongradient