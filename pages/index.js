import 'tailwindcss/tailwind.css'
import { WelcomePage } from '../components/WelcomePage'
import Navbar from '../components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { NormalPage } from '../components/NormalPage'
import { NextSeo } from 'next-seo'

export default function Home() {

  return (
    
    <>
        <NextSeo
      title="Inicio | Piero Rolando"
      description="Portafolio and personal blog of Piero Rolando"
    />
      <NormalPage  title="Inicio">
        <WelcomePage />
      </NormalPage>

    </>
  )
}
