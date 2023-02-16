import React from 'react'
import howitworks from '../assets/howitworks.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'

const HowitWorks = () => {
  return (
    <div id="howitworks">
        <div className="relative flex flex-col justify center px-10">
            <img src={ howitworks } alt="howitworks" className="w-3/4 justify-center self-center" />
            <div class="absolute top-1/4 left-1/4 transform -translate-x-1/4  text-brandBlack text-3xl p-5 ">
                <h1>Outsource to the Philippines</h1>
                <span className="text-blue-400">and create a dedicated team,</span>
                <h1>without the worry about office space, IT,<br/> recruitment, payroll, and more.</h1>
            </div>
        </div>
        <div className="flex flex-row gap-4 px-8 py-10 overflow-hidden justify-center">
            <img src={one} alt="one" className="w-[20%] h-[20%]"/>
            <img src={two} alt="two" className="w-[20%] h-[20%]"/>
            <img src={three} alt="three" className="w-[20%] h-[20%]"/>
            <img src={four} alt="four" className="w-[20%] h-[20%]"/>
        </div>
    </div>
  )
}

export default HowitWorks