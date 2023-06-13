import React from 'react'

const RadioButton = ({label,id,name, value,...props}) => {
  
  return (
    <div className="flex w- items-center gap-x-2">
    <input
      id={id}
      name={name}
      value={value}
      type="radio"
      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      {...props}
    />
    <label
      htmlFor={id}
      className="block text-sm font-normal leading-6 text-gray-900"
    >
      {label}
    </label>
  </div>
  )
}

export default RadioButton