import React from 'react'

const CustomButton = ({ name, icon, redirect}) => {
  return (
    <div className="w-[512px] rounded-full bg-black p-0">
        <a href={redirect} className="flex flex-row">
            <img src={icon} alt="icon" className="w-[128px] h-[128px]"/>
            <h1 className='text-white text-[20px] items-center justify-center align-middle font-semibold p-6'>
                { name }
            </h1>
        </a>
    </div>
  )
}

export default CustomButton