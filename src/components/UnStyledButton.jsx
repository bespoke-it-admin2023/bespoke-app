import React from 'react'


const UnStyledButton = ({text, redirect, buttonStyle}) => {
  return (
    <div className="text-[25px] pb-5">
        <a href={ redirect }>
            <button className={ buttonStyle }>
                {text}
            </button>
        </a>
    </div>
  )
}

export default UnStyledButton