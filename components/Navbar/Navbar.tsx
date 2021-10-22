import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {

  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {

    window.addEventListener('scroll', function () {
      var navbarcoloractive = document.getElementById('navbarcoloractive')
      var navbarpaddingactive = document.getElementById('navbarpaddingactive')

      navbarcoloractive.classList.toggle('navbarcoloractive', window.scrollY > 0);
      navbarpaddingactive.classList.toggle('navbarpaddingactive', window.scrollY > 0);

    })
  }, [])

  return (
    <div className="fixed w-full transition-all z-40 top-0" id="navbarcoloractive">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center transition-all py-6 md:justify-start md:space-x-10" id="navbarpaddingactive">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Workflow</span>
                <img src="/favicon.png" className="w-6" />
              </a>
            </Link>
          </div>
          <div className="cursor-pointer -mr-2 -my-2 md:hidden" onClick={() => { setMobileNav(!mobileNav) }} >
            <a onClick={() => { setMobileNav(!mobileNav) }} className="cursor-pointer rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-300 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/"><a className="text-base font-medium text-gray-500 hover:text-gray-400">Home</a></Link>
            <Link href="/#main"><a className="text-base font-medium text-gray-500 hover:text-gray-400">Who I am?</a></Link>
            {/* <div className="relative">
              <a onClick={() => { setProyectsnav(!proyectsnav) }} className={`${proyectsnav ? 'text-gray-500' : 'text-gray-300'} cursor-pointer rounded-md inline-flex items-center text-base font-medium hover:text-gray-400" aria-expanded="false`} >
                <span>Proyectos</span>
                <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <SubMenu active={proyectsnav} setProyectsnav={setProyectsnav} />
            </div> */}
            <Link href="/proyects"><a className="text-base font-medium text-gray-500 hover:text-gray-400">Proyects</a></Link>
            <Link href="/blog"><a className="text-base font-medium text-gray-500 hover:text-gray-400">Blog</a></Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/contact">
              <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-accent opacity-75 hover:opacity-90 transition-all">
                Contact me
              </a>
            </Link>
          </div>
        </div>
      </div>
      {
        mobileNav &&
        <SubMenuMobile active={true} setMobileNav={setMobileNav} />
        
      }
    </div>
  )
}





export const SubMenuMobile = ({ active, setMobileNav }) => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} id="modal" transition={{ duration: 0.07 }} className={`${active ? '' : 'hidden'} absolute top-0 inset-x-0 transition transform origin-top-right md:hidden min-h-screen bg-primary-900 bg-opacity-60`}
      onClick={e => {
        if(e.target == document.getElementById("modal")) setMobileNav(false)
      }}
    >
      <div className="rounded-b-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-700 bg-primary-800">
        <div className="pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/"><h1 className="arciform text-gray-100">pr</h1></Link>
            </div>
            <div className="-mr-2">
              <button onClick={() => { setMobileNav(!active) }} type="button" className="bg-primary-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Close menu</span>

                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              <Link href="/"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">

                <img src="https://jmsolera.com/wp-content/uploads/2019/07/React.js_logo-512.png" className="w-6" alt="" />
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300">Home</span>
              </a></Link>

              <Link href="/"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">

                <img src="https://miro.medium.com/max/1000/1*ilC2Aqp5sZd1wi0CopD1Hw.png" className="w-6" />
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300">Who I am?</span>
              </a></Link>

              <Link href="/proyects"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                <img src="https://jmsolera.com/wp-content/uploads/2019/07/React.js_logo-512.png" className="w-6" alt="" />
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300">Proyects</span>
              </a></Link>

              <Link href="/blog"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700">
                <img src="https://www.mattepuffo.com/IMMAGINI_ARTICOLI/nodejs.jpeg" className="w-6" />
                <span className="ml-3 text-base font-medium text-gray-400 hover:text-gray-300">Blog</span>
              </a></Link>
            </nav>
          </div>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div>
            <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-accent hover:bg-accent-hover">Contact me</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

