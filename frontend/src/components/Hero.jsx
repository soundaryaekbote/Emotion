import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-[#F8F5F0]">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-14 sm:py-0 px-6">
        <div className="text-[#1C1C1C] max-w-lg">
          <div className="flex items-center gap-3 mb-4">
            <p className="w-10 md:w-14 h-[2px] bg-[#C5A572]"></p>
            <p className="font-medium text-sm md:text-base tracking-widest text-[#C5A572]">
              EMOTION LUXURY WEAR
            </p>
          </div>

          <h1 className="prata-regular text-4xl lg:text-6xl leading-snug font-semibold">
            Redefining Elegance <br /> for Everyone
          </h1>

          <p className="mt-5 text-base md:text-lg text-gray-600 leading-relaxed">
            From timeless classics to modern styles, <span className="font-semibold">Emotion</span> brings 
            luxury fashion crafted for <span className="font-semibold">men, women, and kids</span>.  
            A collection where sophistication meets comfort — for every occasion, for every one of you.
          </p>

          <div className="mt-8">
            <button 
              onClick={() => navigate('/collection')}
              className="px-8 py-3 bg-[#1C1C1C] text-white rounded-2xl shadow-md hover:bg-[#C5A572] hover:text-black transition-all duration-300"
            >
              DISCOVER COLLECTION
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full sm:w-1/2">
        <img 
          className="w-full object-cover h-[500px] sm:h-[650px]" 
          src={assets.hero_img} 
          alt="Luxury Clothing for All" 
        />
      </div>
    </div>
  )
}

export default Hero
