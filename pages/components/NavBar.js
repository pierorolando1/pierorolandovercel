import React, {useContext, useEffect, useState} from 'react'
import Switch from 'react-switch'
import { ThemeContext } from './context/ThemeContext';

export default function NavBar() {

  const { dark, setdark } = useContext(ThemeContext)

  useEffect(() => {
    var mobileMenuButton = document.getElementById("mobileMenuButton");
  mobileMenuButton.onclick = function() {
      document.getElementById("sideMenuHideOnMobile").classList.toggle("-translate-y-full");
      document.getElementById("sideMenuHideOnMobile").classList.toggle("mt-12");
      document.getElementById("sideMenuHideOnMobile").classList.toggle("shadow");
      document.getElementById("mobileMenuButtonClose").classList.toggle("hidden");
      document.getElementById("mobileMenuButtonOpen").classList.toggle("hidden");
  }
    // Hide element when click outside nav
  var theElementContainer = document.getElementsByTagName("nav")[0];
  document.addEventListener('click', function(event) {
      if (!theElementContainer.contains(event.target)) {
          document.getElementById("sideMenuHideOnMobile").classList.add("-translate-y-full");
          document.getElementById("sideMenuHideOnMobile").classList.remove("mt-12");
          document.getElementById("sideMenuHideOnMobile").classList.remove("shadow");
          document.getElementById("mobileMenuButtonOpen").classList.remove("hidden");
          document.getElementById("mobileMenuButtonClose").classList.add("hidden");
      }
  });
  
  
  }, [])

  return (

    <nav className="bg-white dark:bg-gray-800 transition-all shadow-xl hover:shadow-2xl md:rounded-full rounded-xl  fixed max-w-screen-lg z-10 mx-auto inset-x-0 top-0 flex justify-between items-center  md:mt-5 sm:p-2 ">

      <Logo />

      <button id="mobileMenuButton" className="p-3 focus:outline-none md:hidden" title="Open side menu">

        <svg id="mobileMenuButtonClose" className="w-6 h-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>

        <svg id="mobileMenuButtonOpen" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>


      <div id="sideMenuHideOnMobile" className="top-0 dark:bg-gray-800 md:dark:bg-transparent md:bg-transparent bg-white z-10 rounded-bl-md flex absolute md:top-auto right-1 transition-all duration-500 transform translate-x-0 w-1/2 md:w-auto px-3 md:px-0 flex-col md:flex-row -translate-y-full md:translate-y-0 md:mt-1 md:items-center md:mx-1 md:p-4">
      <div style={{  filter: 'drop-shadow()' }}>
        <Switch
                className="react-switch"
                value={(value) => console.log(value)}
                onChange={() => setdark(!dark)}
                checked={dark}
                onColor="#333"
                onHandleColor="#2395f0"
                height={24}
                width={52}
                checkedIcon={
                  <div className="flex items-center text-center justify-center">🌜</div>
                }
                uncheckedIcon={
                  <div className="flex items-center text-center justify-center">🌞</div>
                }
        />
      </div>

        <a href="#" className="my-1 mx-0 sm:mx-2 border-b-2 rounded-full arciform border-transparent md:px-4 md:py-2 dark:hover:text-gray-300 dark:text-gray-100 hover:text-gray-700 transition-all duration-500"><span>Conoceme</span></a>
        <a href="#" className="my-1 mx-0 sm:mx-2 border-b-2 rounded-full arciform border-transparent md:px-4 md:py-2 dark:hover:text-gray-300 dark:text-gray-100 hover:text-gray-700 transition-all duration-500"><span>Proyectos</span></a>
        <a href="#" className="my-1 mx-0 sm:mx-2 border-b-2 rounded-full arciform border-transparent md:px-4 md:py-2 dark:hover:text-gray-300 dark:text-gray-100 hover:text-gray-700 transition-all duration-500"><span>Contactame</span></a>

      </div>
      
    </nav>

  )
}

export const Logo = () => {
  return (
    <a href="#" className="ml-3 inline-flex transition-all duration-500">
      <span className=" text-black dark:text-white  tracking-wide arciform pb-1 text-lg">pr</span>
    </a>
  )
}
