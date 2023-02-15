import React from 'react'

const CustomButton = ({ name, icon, seperator, redirect, tpx}) => {
  return (
    <div className="w-[50%] rounded-full bg-brandBlack hover:bg-brandBlue pr-4 pl-10">
        <a href={redirect} className="flex flex-row items-center justify-evenly">
            <img src={icon} alt="icon" className="w-[120px] h-[120px]"/>
            <img src={seperator} alt="icon" className="w-[64px] h-[148px] p-6"/>
            <h1 className={`text-white text-[${tpx}px]  text-center leading-10 `}>
                { name }
            </h1>
        </a>
    </div>
  )
}

export default CustomButton