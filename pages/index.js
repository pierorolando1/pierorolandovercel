import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import  NavBar  from './components/NavBar'
import Switch from 'react-switch'
import { useState } from 'react'

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

      <NavBar />

      <main className="h-screen w-screen" style={{ 
        backgroundImage: `url("https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png")`, 
        backgroundSize: 'cover'
      }}>
        
        <div className="  h-full w-full pt-24 flex justify-center items-center">
          <div className=" h-2/5 w-2/5 ">
            <h1 className=" text-gradient bg-gradient-to-r from-blue-800 to-blue-500 text-center  text-6xl arciform" style={{filter: 'drop-shadow(5px 3px 11px rgba(0,0,0, 0.27))'}}>Hola, Soy Piero Rolando y soy un desarrolador React</h1>

          </div>
        </div>

      </main>
</>
  )
}
