import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import NavBar from './NavBar'

export const ReactHome = () => {

    
  const { dark } = useContext(ThemeContext)


    return (
    <body className={ dark ? 'dark' : 'nadaps' }>
    <NavBar />

    <main className={`overflow-x-hidden h-screen w-screen ${ dark ?  'bg-gray-900' : 'a' } `}  style={{ 
        //backgroundImage: `url(${ dark ? 'https://wallpaperaccess.com/full/3949076.jpg' : "https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png" })`, 
        //backgroundSize: 'cover',
    }}>
        <div className="pt-10 w-screen h-1/2 flex justify-center items-center overflow-x-hidden" style={{ 

        backgroundImage: `url(${ dark ? 'https://wallpaperaccess.com/full/3949076.jpg' : "https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png" })`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'fixed',
        marginTop: '5.5rem',
    }}>
            <div className=" h-3/5 w-3/4 max-w-screen-lg pt-4  flex justify-center ">
                <h1 className="font-sans arciform pb-1 text-gradient bg-gradient-to-r dark:text-white dark:from-gray-100 dark:to-white from-blue-800 to-blue-500 text-left text-4xl" style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}}>Hola, <br/> <span className="font-bold text-6xl">Soy Piero Rolando </span><br/><span className="text-4xl font-normal">y soy un desarrolador React</span></h1>
            </div>
        </div>

        <p>
        </p>
    </main>
    </body>    
)
}


