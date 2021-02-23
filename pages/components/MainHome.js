import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import NavBar from './NavBar'

export const MainHome = () => {

    
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
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        marginTop: '5.5rem',
    }}>
            <div className=" h-3/5 w-3/4 max-w-screen-lg pt-4  flex justify-center ">
                <h1 className="font-sans arciform pb-1 text-gradient bg-gradient-to-r dark:text-white dark:from-gray-100 dark:to-white from-blue-800 to-blue-500 text-left text-4xl" style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}}>Hola, <br/> <span className="font-bold text-6xl">Soy Piero Rolando </span><br/><span className="text-4xl font-normal">y soy un desarrolador React</span></h1>
            </div>
        </div>

        <div className="h-2/5 w-full flex justify-center items-center">

            <div className="bg-green-400 max-w-screen-lg w-3/4 h-1/3 md:grid  grid grid-cols-4 gap-5">
                <div class="col-end-5 my-2" style={{ gridColumn: 'span 1 / span 2' }}>
                    <a href="#">
                        <div
                            class="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md text-right">
                            <h3 class="text-2xl mb-3 font-semibold inline-flex ">
                                Next
                                <svg class="ml-2" width="24" height="30" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                        fill="currentColor" /></svg>
                            </h3>
                            <p class="text-lg">Why do we use it?</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>

    </main>
    </body>    
)
}


