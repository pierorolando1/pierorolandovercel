import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {

  const [proyectsnav, setProyectsnav] = useState(true)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    
    window.addEventListener('scroll', function(){
      var navbarcoloractive = document.getElementById('navbarcoloractive')
      var navbarpaddingactive = document.getElementById('navbarpaddingactive')
      
      navbarcoloractive.classList.toggle('navbarcoloractive', window.scrollY > 0);
      navbarpaddingactive.classList.toggle('navbarpaddingactive', window.scrollY > 0);

    })
  }, [])

  return (
    <div className="fixed w-full transition-all z-40" id="navbarcoloractive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center transition-all py-6 md:justify-start md:space-x-10" id="navbarpaddingactive">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <h1 className="arciform text-gray-100 text-xl">pr</h1>
            </a>
          </div>
          <div className="cursor-pointer -mr-2 -my-2 md:hidden" onClick={() => { setMobileNav(!mobileNav) }} >
            <a onClick={() => { setMobileNav(!mobileNav) }} className="cursor-pointer rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link  href="/"><a className="text-base font-medium text-gray-500 hover:text-gray-400">Inicio</a></Link>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-400">¿Quien soy?</a>
            <div className="relative">
              {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
              <a onClick={() => { setProyectsnav(!proyectsnav) }} /*onClick={ () => { setProyectsnav(!proyectsnav) } }*/ className={`${proyectsnav ? 'text-gray-500' : 'text-gray-300'} cursor-pointer rounded-md inline-flex items-center text-base font-medium hover:text-gray-400" aria-expanded="false`} >
                <span>Proyectos</span>
                {/* <!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            --> */}
                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              {/* <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1" 
          --> */}
              <SubMenu active={proyectsnav} setProyectsnav={setProyectsnav} />
            </div>

            <Link href="/blog"><a className="text-base font-medium text-gray-500 hover:text-gray-400">Blog</a></Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/contact"><a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 opacity-75 hover:opacity-95">Contactame</a></Link> 
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
      <SubMenuMobile active={mobileNav} setMobileNav={setMobileNav} />
    </div>
  )
}





export const SubMenuMobile = ({ active, setMobileNav }) => {
  return (
    <div className={`${active ? '' : 'hidden'} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`} >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-700">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/"><h1 className="arciform text-gray-100">pr</h1></Link>
            </div>
            <div className="-mr-2">
              <button onClick={() => { setMobileNav(!active) }} type="button" className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Close menu</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">

                <img src="https://jmsolera.com/wp-content/uploads/2019/07/React.js_logo-512.png" className="w-6" alt="" />
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300"> React </span>
              </a>

              <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">

                <img src="https://miro.medium.com/max/1000/1*ilC2Aqp5sZd1wi0CopD1Hw.png" className="w-6" />
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300"> Flutter </span>
              </a>

              <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                <img src="https://jmsolera.com/wp-content/uploads/2019/07/React.js_logo-512.png" className="w-6" alt="" />
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300"> React Native </span>
              </a>

              <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                <img src="https://www.mattepuffo.com/IMMAGINI_ARTICOLI/nodejs.jpeg" className="w-6" />
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300"> Node/express </span>
              </a>

              <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                <svg className="flex-shrink-0 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300"> FullStack </span>
              </a>
            </nav>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <Link href="/"><a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200">Inicio</a></Link>
            <Link href="/"><a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200">¿Quien soy?</a></Link>
            <Link href="/"><a href="#" className="text-base font-medium text-gray-400 hover:text-gray-200">Proyectos</a></Link>
            <Link href="/blog"><a href="/blog" className="text-base font-medium text-gray-400 hover:text-gray-200"> Blog </a></Link>
          </div>
          <div>
            <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">Contactame</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export const SubMenu = ({ active, setProyectsnav }) => {
  return (
    <div onMouseLeave={() => { setProyectsnav(true) }} className={`${active ? 'hidden' : ''} absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700">
            <img src="https://jmsolera.com/wp-content/uploads/2019/07/React.js_logo-512.png" className="w-6" alt="" />
            <div className="ml-4">
              <p className="text-base font-medium text-gray-300">React</p>
              <p className="mt-1 text-sm text-gray-500 hover:text-gray-400">Mira algunos proyectos que realize con la libreria de Facebook</p>
            </div>
          </a>

          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700">
            <img src="https://miro.medium.com/max/1000/1*ilC2Aqp5sZd1wi0CopD1Hw.png" className="w-6" />
            <div className="ml-4">
              <p className="text-base font-medium text-gray-300">Flutter</p>
              <p className="mt-1 text-sm text-gray-500 hover:text-gray-400">Clickeame para ver algunos proyectos que he realizado con el SDK de Google</p>
            </div>
          </a>

          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700">
            <img src="https://jmsolera.com/wp-content/uploads/2019/07/React.js_logo-512.png" className="w-6" alt="" />
            <div className="ml-4">
              <p className="text-base font-medium text-gray-300">React Native</p>
              <p className="mt-1 text-sm text-gray-500 hover:text-gray-400">Your customers&#039; data will be safe and secure.</p>
            </div>
          </a>

          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700">
            <img src="https://www.mattepuffo.com/IMMAGINI_ARTICOLI/nodejs.jpeg" className="w-6" />
            <div className="ml-4">
              <p className="text-base font-medium text-gray-300">Node/express</p>
              <p className="mt-1 text-sm text-gray-500 hover:text-gray-400">Connect with third-party tools that you&#039;re already using.</p>
            </div>
          </a>

          <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700">
            <svg className="flex-shrink-0 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-300">Full Stack</p>
              <p className="mt-1 text-sm text-gray-500 hover:text-gray-400">Es casi imposible hacer un proyecto con una sola tecnologia, aqui estan algunos proyectos donde combino varias tecnologias</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
