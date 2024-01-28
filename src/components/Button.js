import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-blue-500 text-white font-medium py-2 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 duration-500">
      {text}
    </button>
  )
}

export default Button