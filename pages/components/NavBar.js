import React, {useEffect} from 'react'

export default function NavBar() {

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

    <nav className="bg-white shadow-xl hover:shadow-2xl md:rounded-full rounded-xl transition-shadow fixed max-w-screen-lg z-10 mx-auto inset-x-0 top-0 flex justify-between items-center  md:mt-5 sm:p-2 ">

      <Logo />

      <button id="mobileMenuButton" className="p-3 focus:outline-none md:hidden" title="Open side menu">

        <svg id="mobileMenuButtonClose" className="w-6 h-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>

        <svg id="mobileMenuButtonOpen" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>


      <div id="sideMenuHideOnMobile" className=" md:bg-transparent bg-white z-10 rounded-bl-md flex absolute top-auto right-1 transition-all duration-500 transform translate-x-0 w-1/2 md:w-auto px-3 md:px-0 flex-col md:flex-row -translate-y-full md:translate-y-0 md:mt-1 md:items-center md:mx-1 ">
        <a href="#" className="mx-0 sm:mx-2 md:my-2 border-b-2 rounded-full font-sans border-transparent md:hover:bg-gray-200 md:px-4 md:py-2 hover:text-gray-700 transition-all duration-500"><span>About</span></a>
        <a href="#" className="mx-0 sm:mx-2 md:my-2 border-b-2 rounded-full font-sans border-transparent md:hover:bg-gray-200 md:px-4 md:py-2 hover:text-gray-700 transition-all duration-500"><span>About</span></a>
        <a href="#" className="mx-0 sm:mx-2 md:my-2 border-b-2 rounded-full font-sans border-transparent md:hover:bg-gray-200 md:px-4 md:py-2 hover:text-gray-700 transition-all duration-500"><span>About</span></a>

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



