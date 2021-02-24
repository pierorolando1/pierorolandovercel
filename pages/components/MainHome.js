import React, { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import NavBar from './NavBar'

export const MainHome = () => {

    
  const { dark } = useContext(ThemeContext)


    return (
    <body className={ dark ? 'dark w-screen' : 'a w-screen' }>
    <NavBar />

    <main className={`overflow-x-hidden h-screen w-screen ${ dark ?  'bg-gray-900' : 'a' } `}  style={{ 
        //backgroundImage: `url(${ dark ? 'https://wallpaperaccess.com/full/3949076.jpg' : "https://midu.dev/images/wallpapers/fondo-react-horizontal-random-4k.png" })`, 
        //backgroundSize: 'cover',
    }}>
        <div className="pt-10 w-screen h-1/2 flex justify-center items-center overflow-x-hidden" style={{ 

        backgroundImage: `url(${ '/ola.png'  })`, 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        marginTop: '5.5rem',
    }}>
            <div className=" h-3/5 w-3/4 max-w-screen-lg pt-4  flex justify-center">
                <h1 className="font-sans arciform pb-1 text-gradient bg-gradient-to-r dark:text-white dark:from-gray-100 dark:to-white from-blue-800 to-blue-500 text-left text-2xl md:text-4xl" style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}}>Hola, <br/> <span className="font-bold text-3xl md:text-6xl">Soy Piero Rolando </span><br/><span className="md:text-4xl text-2xl font-normal">y soy un desarrolador React</span></h1>
            </div>
        </div>

        <div className="h-2/5 w-full flex justify-center items-center">

            <div className="max-w-screen-lg w-3/4 h-1/3  grid grid-cols-2 gap-5">

                <div className="col-start-1 col-end-3 w-full h-full">
                    <ul className="md:flex md:flex-col flex-row">
                        <i style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}} className="cursor-pointer p-2 fab fa-youtube dark:text-gray-400"></i>
                        <i style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}} className="cursor-pointer p-2 fab fa-facebook dark:text-gray-400"></i>
                        <i style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}} className="cursor-pointer p-2 fab fa-linkedin dark:text-gray-400"></i>
                        <i style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}} className="cursor-pointer p-2 fab fa-whatsapp dark:text-gray-400"></i>
                        <i style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}} className="cursor-pointer p-2 fab fa-telegram dark:text-gray-400"></i>
                        <i style={{filter: 'drop-shadow(5px 3px 9px rgba(0,0,0, 0.9))'}} className="cursor-pointer p-2 fab fa-instagram dark:text-gray-400"></i>
                    </ul>
                </div>

                <div className="col-end-5 my-2" >
                    <a href="#">
                        <div
                            className=" md:p-6 p-4 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 border-red-500 shadow-md text-right">
                            <h3 className="md:text-2xl text-base mb-3 font-semibold inline-flex dark:text-gray-50">
                                Proyectos
                                <svg className="ml-2" width="24" height="30" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                        fill="currentColor" /></svg>
                            </h3>
                            <p className="md:text-sm text-xs dark:text-gray-50">Quisieras ver algunos proyectos mios?</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>

    </main>
    </body>    
)
}


