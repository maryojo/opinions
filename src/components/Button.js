import React from 'react'

const Button = ({text}) => {
  return (
    <button className='border-2 border-[#0891B2] rounded-full text-[#0891B2] px-5 py-1'>
      {text}
    </button>
  )
}

export default Button