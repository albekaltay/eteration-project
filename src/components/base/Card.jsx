import React from 'react'

const Card = ({width, height, shadowSize = "lg", className, children}) => {
  return (
    <div className={`w-${width} h-${height} rounded-sm overflow-hidden shadow-${shadowSize} p-2.5 bg-white ${className}`}>
        {children}
  </div>
  )
}

export default Card