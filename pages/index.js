import Head from 'next/head'
//import '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import { WelcomePage } from './components/WelcomePage'
import Navbar from './components/Navbar/navbar'

export default function Home() {

  return (

    <>
      <Head>
        <title>Inicio | Piero Rolando</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

      </Head>

      <Navbar />
      <WelcomePage />

    </>
  )
}
