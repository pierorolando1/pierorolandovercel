import Head from 'next/head'
import { ThemeContext, ThemeProvider } from './components/context/ThemeContext'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import  NavBar  from './components/NavBar'
import { MainHome } from './components/MainHome'

export default function Home() {

  return (
    
    <ThemeProvider>
      <Head>
        <title>Inicio | Piero Rolando</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css" integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY=" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet"/>

      <MainHome />

    </ThemeProvider>
  )
}
