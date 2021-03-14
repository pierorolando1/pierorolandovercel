import 'tailwindcss/tailwind.css'
import { WelcomePage } from '../components/WelcomePage'
import Navbar from '../components/Navbar/Navbar'
import React, { useEffect } from 'react'
import { NormalPage } from '../components/NormalPage'

export default function Home() {

  return (
    <>
      <NormalPage  title="Inicio">
        <WelcomePage />
      </NormalPage>

    </>
  )
}
