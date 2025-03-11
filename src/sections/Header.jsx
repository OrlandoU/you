import React from 'react';
import { Fade } from 'react-awesome-reveal';
import flower from '../assets/flowers2.png';

export default function Header() {
  return (
    <header className="text-center z-10 w-full h-screen p-18 flex flex-col justify-center sm:justify-end relative">
      <Fade cascade duration={2000} triggerOnce>
        <h1 className="text-6xl font-thin text-pink-50">Nuestra Historia de Amor</h1>
        <p className="text-lg text-pink-200">Cada segundo contigo es un regalo</p>
        <img src={flower} alt="Flowers outlined" className='absolute bottom-0 right-0 w-sm sm:w-sm md:w-sm lg:w-xl xl:w-2xl'/>
        <span className='absolute bottom-2 left-2 text-pink-50 font-bold'>By Orlando</span>
      </Fade>
    </header>
  )
}