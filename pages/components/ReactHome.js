import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import NavBar from './NavBar'

export const ReactHome = () => {

    
  const { dark } = useContext(ThemeContext)


    return (
    <body className={ dark ? 'dark' : 'nadaps' }>
    <NavBar />

    <main className={`h-screen w-screen ${ dark ? 'bg-gradient-to-t from-gray-800 to-gray-900' : 'a' } `}  style={{ 
        //backgroundImage: `url(${ dark ? 'https://wallpaperaccess.com/full/3949076.jpg' : "https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png" })`, 
        //backgroundSize: 'cover',
    }}>
        <div className="  h-full w-full pt-24 flex justify-center items-center">
            <div className=" h-3/5 w-3/4 max-w-screen-lg pt-4">
            <h1 className="pb-1 text-gradient bg-gradient-to-r dark:text-white dark:from-gray-100 dark:to-white from-blue-800 to-blue-500 text-left  text-6xl" style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}}>Hola, <br/> Soy Piero Rolando y soy un desarrolador React</h1>

            </div>
        </div>
    </main>
    </body>    
)
}


