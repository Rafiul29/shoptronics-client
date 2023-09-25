import React from 'react'

const Button = ({text}) => {
  return (
    <div className=" border border-indigo-500 text-md px-5  py-3 rounded-xl font text-xl  hover:bg-indigo-500 hover:shadow-md hover:shadow-indigo-500/90 cursor-pointer hover:text-white duration-700 ">
      {text}
    </div>
  )
}

export default Button