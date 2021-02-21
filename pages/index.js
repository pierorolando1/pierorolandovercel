import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Piero Rolando</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    <nav className="flex items-center bg-gray-100 p-2 flex-wrap  w-full justify-between px-5 lg:px-20 dark:bg-gray-500">
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <span className="text-2xl text-black dark:text-white  tracking-wide arciform pb-1">pr</span>
      </a>
      <span className="material-icons dark:text-white">
        nightlight_round
      </span>
      <button className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation">
        <i className="material-icons">menu</i>
      </button>
      <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">

          <a href="#" className="lg:inline-flex lg:w-auto w-full px-4 py-2 hover:shadow-xl rounded-3xl text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Home</span>
          </a>
          <a href="#" className="lg:inline-flex lg:w-auto w-full px-4 py-2 hover:shadow-xl rounded-3xl text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>About</span>
          </a>
          <a href="#" className="lg:inline-flex lg:w-auto w-full px-4 py-2 hover:shadow-xl rounded-3xl text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Services</span>
          </a>
          <a href="#" className="lg:inline-flex lg:w-auto w-full px-4 py-2 hover:shadow-xl rounded-3xl text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Gallery</span>
          </a>
          <a href="#" className="lg:inline-flex lg:w-auto w-full px-4 py-2 hover:shadow-xl rounded-3xl text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Products</span>
          </a>
          <a href="#" className="lg:inline-flex lg:w-auto w-full px-4 py-2 hover:shadow-xl rounded-3xl text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
            <span>Contact Us</span>
          </a>

        </div>
      </div>
    </nav>


</>
  )
}
