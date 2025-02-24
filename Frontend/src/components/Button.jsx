import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className="relative text-black font-medium hover:opacity-80">
      {text}
      <span className="absolute left-1/2 -bottom-1 w-full h-[2px] bg-black transition-all duration-300  -translate-x-1/2"></span>
    </button>
    </div>
  )
}

export default Button