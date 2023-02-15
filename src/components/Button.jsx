import React from 'react'


const Button = ({props, redirect}) => {
  return (
    <div className="text-[25px] pb-5">
        <a href={ redirect }>
            <button className={`bg-brandBlack hover:bg-brandBlue rounded-full min-h-[68px] px-10`}>
                {props}
            </button>
        </a>
    </div>
  )
}

export default Button